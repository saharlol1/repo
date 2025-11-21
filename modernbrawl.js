// global cache
var cache = {
    modules: {},
    options: {}
};

var a = 0xc1bcc8;
var b = 0x7d7914 + 0;
var c = [0x132bf8, 0x50c1f0, 0x5269c8, 0x5dbcc0, 0x67ea6c, 0x6a3254];
var d = 0x7b7766 + 0;
var e = 0x4f9f00;
var f = 0x448EE0;
var POINTER_SIZE = 4;

var free = new NativeFunction(Module.findExportByName('libc.so', 'free'), 'void', ['pointer']);
var pthread_mutex_lock = new NativeFunction(Module.findExportByName('libc.so', 'pthread_mutex_lock'), 'int', ['pointer']);
var pthread_mutex_unlock = new NativeFunction(Module.findExportByName('libc.so', 'pthread_mutex_unlock'), 'int', ['pointer']);
var pthread_cond_signal = new NativeFunction(Module.findExportByName('libc.so', 'pthread_cond_signal'), 'int', ['pointer']);
var select = new NativeFunction(Module.findExportByName('libc.so', 'select'), 'int', ['int', 'pointer', 'pointer', 'pointer', 'pointer']);
var memmove = new NativeFunction(Module.findExportByName('libc.so', 'memmove'), 'pointer', ['pointer', 'pointer', 'int']);
var libc_send = new NativeFunction(Module.findExportByName('libc.so', 'send'), 'int', ['int', 'pointer', 'int', 'int']);
var libc_recv = new NativeFunction(Module.findExportByName('libc.so', 'recv'), 'int', ['int', 'pointer', 'int', 'int']);
var ntohs = new NativeFunction(Module.findExportByName('libc.so', 'ntohs'), 'uint16', ['uint16']);
var inet_addr = new NativeFunction(Module.findExportByName('libc.so', 'inet_addr'), 'int', ['pointer']);

var Message = {
    _getByteStream: function(message) {
        return message.add(2 * POINTER_SIZE);
    },
    _getVersion: function(message) {
        return Memory.readInt(message.add(1 * POINTER_SIZE));
    },
    _setVersion: function(message, version) {
        Memory.writeInt(message.add(1 * POINTER_SIZE), version);
    },
    _getMessageType: function(message) {
        return (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(5 * POINTER_SIZE)), 'int', ['pointer']))(message);
    },
    _encode: function(message) {
        (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(2 * POINTER_SIZE)), 'void', ['pointer']))(message);
    },
    _decode: function(message) {
        (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(3 * POINTER_SIZE)), 'void', ['pointer']))(message);
    },
    _free: function(message) {
        (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(6 * POINTER_SIZE)), 'void', ['pointer']))(message);
        (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(1 * POINTER_SIZE)), 'void', ['pointer']))(message);
    }
};
var ByteStream = {
    _getOffset: function(byteStream) {
        return Memory.readInt(byteStream.add(1 * POINTER_SIZE + 12));
    },
    _getByteArray: function(byteStream) {
        return Memory.readPointer(byteStream.add(1 * POINTER_SIZE + 24));
    },
    _setByteArray: function(byteStream, array) {
        Memory.writePointer(byteStream.add(1 * POINTER_SIZE + 24), array);
    },
    _getLength: function(byteStream) {
        return Memory.readInt(byteStream.add(1 * POINTER_SIZE + 16));
    },
    _setLength: function(byteStream, length) {
        Memory.writeInt(byteStream.add(1 * POINTER_SIZE + 16), length);
    }
};
var Buffer = {
    _getEncodingLength: function(buffer) {
        return Memory.readU8(buffer.add(2)) << 16 | Memory.readU8(buffer.add(3)) << 8 | Memory.readU8(buffer.add(4));
    },
    _setEncodingLength: function(buffer, length) {
        Memory.writeU8(buffer.add(2), length >> 16 & 0xFF);
        Memory.writeU8(buffer.add(3), length >> 8 & 0xFF);
        Memory.writeU8(buffer.add(4), length & 0xFF);
    },
    _setMessageType: function(buffer, type) {
        Memory.writeU8(buffer.add(0), type >> 8 & 0xFF);
        Memory.writeU8(buffer.add(1), type & 0xFF);
    },
    _getMessageVersion: function(buffer) {
        return Memory.readU8(buffer.add(5)) << 8 | Memory.readU8(buffer.add(6));
    },
    _setMessageVersion: function(buffer, version) {
        Memory.writeU8(buffer.add(5), version >> 8 & 0xFF);
        Memory.writeU8(buffer.add(6), version & 0xFF);
    },
    _getMessageType: function(buffer) {
        return Memory.readU8(buffer) << 8 | Memory.readU8(buffer.add(1));
    }
};
var MessageQueue = {
    _getCapacity: function(queue) {
        return Memory.readInt(queue.add(1 * POINTER_SIZE));
    },
    _get: function(queue, index) {
        return Memory.readPointer(Memory.readPointer(queue).add(POINTER_SIZE * index));
    },
    _set: function(queue, index, message) {
        Memory.writePointer(Memory.readPointer(queue).add(POINTER_SIZE * index), message);
    },
    _count: function(queue) {
        return Memory.readInt(queue.add(1 * POINTER_SIZE + 4));
    },
    _decrementCount: function(queue) {
        Memory.writeInt(queue.add(1 * POINTER_SIZE + 4), Memory.readInt(queue.add(1 * POINTER_SIZE + 4)) - 1);
    },
    _incrementCount: function(queue) {
        Memory.writeInt(queue.add(1 * POINTER_SIZE + 4), Memory.readInt(queue.add(1 * POINTER_SIZE + 4)) + 1);
    },
    _getDequeueIndex: function(queue) {
        return Memory.readInt(queue.add(1 * POINTER_SIZE + 8));
    },
    _getEnqueueIndex: function(queue) {
        return Memory.readInt(queue.add(1 * POINTER_SIZE + 12));
    },
    _setDequeueIndex: function(queue, index) {
        Memory.writeInt(queue.add(1 * POINTER_SIZE + 8), index);
    },
    _setEnqueueIndex: function(queue, index) {
        Memory.writeInt(queue.add(1 * POINTER_SIZE + 12), index);
    },
    _enqueue: function(queue, message) {
        pthread_mutex_lock(queue.sub(64));
        var index = MessageQueue._getEnqueueIndex(queue);
        MessageQueue._set(queue, index, message);
        MessageQueue._setEnqueueIndex(queue, (index + 1) % MessageQueue._getCapacity(queue));
        MessageQueue._incrementCount(queue);
        pthread_mutex_unlock(queue.sub(64));
    },
    _dequeue: function(queue) {
        var message = null;
        pthread_mutex_lock(queue.sub(64));
        if (MessageQueue._count(queue)) {
            var index = MessageQueue._getDequeueIndex(queue);
            message = MessageQueue._get(queue, index);
            MessageQueue._setDequeueIndex(queue, (index + 1) % MessageQueue._getCapacity(queue));
            MessageQueue._decrementCount(queue);
        }
        pthread_mutex_unlock(queue.sub(64));
        return message;
    }
};

var bindings = {
    _onWakeup: function(){
        var message = MessageQueue._dequeue(cache.sendQueue);
        while (message) {
            var messageType = Message._getMessageType(message);
            console.log(messageType)
            if (messageType === 10100) {
                message = Memory.readPointer(cache.loginMessagePtr);
                Memory.writePointer(cache.loginMessagePtr, ptr(0));
            }    
            Message._encode(message);
            var byteStream = Message._getByteStream(message);
            var messagePayloadLength = ByteStream._getOffset(byteStream);
            var messageBuffer = cache.newOperator(messagePayloadLength + 7);
            memmove(messageBuffer.add(7), ByteStream._getByteArray(byteStream), messagePayloadLength);
            Buffer._setEncodingLength(messageBuffer, messagePayloadLength);
            Buffer._setMessageType(messageBuffer, Message._getMessageType(message));
            Buffer._setMessageVersion(messageBuffer, Message._getVersion(message));
            libc_send(cache.fd, messageBuffer, messagePayloadLength + 7, 0);
            free(messageBuffer);
            Message._free(message); 
            message = MessageQueue._dequeue(cache.sendQueue);
        }
    },
    _onReceive: function() {
        var headerBuffer = cache.newOperator(7);
        libc_recv(cache.fd, headerBuffer, 7, 64);
        var messageType = Buffer._getMessageType(headerBuffer);
        if (messageType === 20104) {
            Memory.writeInt(cache.state, 5);
        }
        var payloadLength = Buffer._getEncodingLength(headerBuffer);
        var messageVersion = Buffer._getMessageVersion(headerBuffer);
        free(headerBuffer);
        var messageBuffer = cache.newOperator(payloadLength); 
        libc_recv(cache.fd, messageBuffer, payloadLength, 64);
        var message = cache.createMessageByType(cache.messageFactory, messageType);
        Message._setVersion(message, messageVersion);
        var byteStream = Message._getByteStream(message);
        ByteStream._setLength(byteStream, payloadLength);
        if (payloadLength) {
            var byteArray = cache.newOperator(payloadLength);
            memmove(byteArray, messageBuffer, payloadLength);
            ByteStream._setByteArray(byteStream, byteArray);
        }
        Message._decode(message);
        MessageQueue._enqueue(cache.recvQueue, message);
        free(messageBuffer);
    },
    _setupMessaging: function(){
        cache.wakeUpReturnArray = [];
        for (var i = 0; i < c.length; i += 1) {
            cache.wakeUpReturnArray.push(cache.base.add(c[i]));
        }
        cache.wakeUp = cache.base.add(d);
        cache.serverConnection = Memory.readPointer(cache.base.add(a));
        cache.selectReturn = cache.base.add(f);
        cache.messaging = Memory.readPointer(cache.serverConnection.add(1 * POINTER_SIZE));
        cache.messageFactory = Memory.readPointer(cache.messaging.add(152));
        cache.recvQueue = cache.messaging.add(328);
        cache.sendQueue = cache.messaging.add(416);
        cache.state = cache.messaging.add(724);
        cache.loginMessagePtr = cache.messaging.add(728);
    
        cache.newOperator = new NativeFunction(cache.base.add(b), 'pointer', ['int']);
        cache.createMessageByType = new NativeFunction(cache.base.add(e), 'pointer', ['pointer', 'int']);
        
        Interceptor.replace(Module.findExportByName('libc.so', 'select'), new NativeCallback(function(nfds, readfds, writefds, exceptfds, timeout) {
            var r = select(nfds, readfds, writefds, exceptfds, timeout);
            if (this.returnAddress.equals(cache.selectReturn)) {
                bindings._onReceive();
            }
            return r;
        }, 'int', ['int', 'pointer', 'pointer', 'pointer', 'pointer']));
    },
    _setSockfd: function(sockfd) {
        cache.fd = sockfd;
    }
};

rpc.exports = {
    init: function(stage, options) {
        cache.editHost = function () { 
			cache.options.redirectHost = false; 
        }; 
        cache.options = options || {};
        cache.base = Module.findBaseAddress('libg.so');
        Interceptor.attach(Module.findExportByName('libc.so', 'connect'), {
            onEnter: function(args) {
                if (ntohs(Memory.readU16(args[1].add(2))) === 9339) {
                    bindings._setSockfd(args[0].toInt32());
                    Memory.writeU16(args[1].add(2), ntohs(9339));
                    Memory.writeInt(args[1].add(4), inet_addr(Memory.allocUtf8String("127.0.0.1")));
                    bindings._setupMessaging();
                }
            }
        });
    }
};
