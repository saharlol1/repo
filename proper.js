// Job ID: 04bbswbomivw
let bIJgb = { Jb: true };

const wRWT = "modules";
const YSZT = "options";
const sOQT = "findExportByName";
const UPTT = "libc.so";
const oLKT = "free";
const QMNT = "void";
const QgBU = "pointer";
const siEU = "pthread_mutex_lock";
const MdvU = "int";
const ofyU = "pthread_mutex_unlock";
const IapU = "pthread_cond_signal";
const kcsU = "select";
const EXiU = "memmove";
const gZlU = "ntohs";
const IynR = "uint16";
const kAqR = "inet_addr";
const EvhR = "send";
const gxkR = "recv";
const AsbR = "perform";
const cueR = "use";
const wpVQ = "java.lang.System";
const YqYQ = "java.lang.Runtime";
const YKLR = "loadLibrary";
const AMOR = "overload";
const UHFR = "java.lang.String";
const wJIR = "dalvik.system.VMStack";
const QEzR = "implementation";
const sGCR = "getRuntime";
const MBtR = "loadLibrary0";
const oDwR = "getCallingClassLoader";
const oXjS = "lib";
const QYmS = ".so";
const kUdS = "_getByteStream";
const MVgS = "add";
const gRXR = "_getVersion";
const ISaS = "readInt";
const cORR = "_setVersion";
const EPUR = "writeInt";
const EjIS = "_getMessageType";
const glLS = "readPointer";
const AgCS = "_encode";
const ciFS = "_decode";
const wdwS = "_free";
const YezS = "_getOffset";
const saqS = "_getByteArray";
const UbtS = "_setByteArray";
const wBuP = "writePointer";
const YCxP = "_getLength";
const syoP = "_setLength";
const UzrP = "_getEncodingLength";
const oviP = "readU8";
const QwlP = "_setEncodingLength";
const kscP = "writeU8";
const MtfP = "_setMessageType";
const MNSP = "_getMessageVersion";
const oPVP = "_setMessageVersion";
const IKMP = "_getCapacity";
const kMPP = "_get";
const EHGP = "_set";
const gJJP = "_count";
const AEAP = "_decrementCount";
const cGDP = "_incrementCount";
const carQ = "_getDequeueIndex";
const EbuQ = "_getEnqueueIndex";
const YWkQ = "_setDequeueIndex";
const AYnQ = "_setEnqueueIndex";
const UTeQ = "_enqueue";
const wVhQ = "sub";
const QQYP = "_dequeue";
const sSbQ = "attach";
const smPQ = "connect";
const UnSQ = "onEnter";
const ojJQ = "readU16";
const QkMQ = "fd";
const kgDQ = "toInt32";
const MhGQ = "redirectHost";
const gdxQ = "allocUtf8String";
const IeAQ = "wakeUpReturnArray";
const kEBN = "length";
const MFEN = "push";
const gBvN = "base";
const ICyN = "pthreadReturn";
const cypN = "serverConnection";
const EzsN = "selectReturn";
const YujN = "messaging";
const AwmN = "messageFactory";
const AQZN = "recvQueue";
const cScO = "sendQueue";
const wNTN = "state";
const YOWN = "loginMessagePtr";
const sKNN = "newOperator";
const ULQN = "createMessageByType";
const oHHN = "sendMessage";
const QIKN = "replace";
const QcyO = "returnAddress";
const seBO = "equals";
const MZrO = "context";
const obvO = "sp";
const IWlO = "exports";
const kYoO = "init";
const ETfO = "libg.so";
const gViO = "detachAll";
const gpWO = "findModuleByName";

const IqZO = {
    [wRWT]: {},
    [YSZT]: {}
};

const cmQO = 0xc1bcc8;
const EnTO = 0x7d7914 + 1;
const YiKO = [0x132bf8, 0x50c1f0, 0x5269c8, 0x5dbcc0, 0x67ea6c, 0x6a3254];
const AkNO = 0x7b7766 + 1;
const UfEO = 0x4f9f00;
const whHO = 0x448EE0;
const YGIL = 4;

var AILL = new NativeFunction(Module.findExportByName(UPTT, oLKT), QMNT, [QgBU]);
var UDCL = new NativeFunction(Module.findExportByName(UPTT, siEU), MdvU, [QgBU]);
var wFFL = new NativeFunction(Module.findExportByName(UPTT, ofyU), MdvU, [QgBU]);
var QAwL = new NativeFunction(Module.findExportByName(UPTT, IapU), MdvU, [QgBU]);
var sCzL = new NativeFunction(Module.findExportByName(UPTT, kcsU), MdvU, [MdvU, QgBU, QgBU, QgBU, QgBU]);
var MxqL = new NativeFunction(Module.findExportByName(UPTT, EXiU), QgBU, [QgBU, QgBU, MdvU]);
var oztL = new NativeFunction(Module.findExportByName(UPTT, gZlU), IynR, [IynR]);
var oTgM = new NativeFunction(Module.findExportByName(UPTT, kAqR), MdvU, [QgBU]);
var QUjM = new NativeFunction(Module.findExportByName(UPTT, EvhR), MdvU, [MdvU, QgBU, MdvU, MdvU]);
var kQaM = new NativeFunction(Module.findExportByName(UPTT, gxkR), MdvU, [MdvU, QgBU, MdvU, MdvU]);

function MRdM(gNUL, IOXL) {
    Java[AsbR](function () {
        var cKOL = Java[cueR](wpVQ);
        var ELRL = Java[cueR](YqYQ);
        var EfFM = cKOL[YKLR][AMOR](UHFR);
        var ghIM = Java[cueR](wJIR);

        EfFM[QEzR] = function (AczM) {
            try {
                if (ELRL[sGCR]()[MBtR]) {
                    ELRL[sGCR]()[MBtR](ghIM[oDwR](), AczM);
                } else {
                    ELRL[sGCR]()[YKLR](AczM, ghIM[oDwR]());
                }

                if (gNUL === oXjS + AczM + QYmS) {
                    IOXL();
                }
            } catch (YawM) {}
        };
    });
}

var sWmM = {
    [kUdS]: function (UXpM) { return UXpM[MVgS](2 * YGIL); },
    [gRXR]: function (UrdN) { return Memory[ISaS](UrdN[MVgS](1 * YGIL)); },
    [cORR]: function (wtgN, QoXM) { Memory[EPUR](wtgN[MVgS](1 * YGIL), QoXM); },
    [EjIS]: function (sqaN) {
        return (new NativeFunction(Memory[glLS](Memory[glLS](sqaN)[MVgS](5 * YGIL)), MdvU, [QgBU]))(sqaN);
    },
    [AgCS]: function (MlRM) {
        (new NativeFunction(Memory[glLS](Memory[glLS](MlRM)[MVgS](2 * YGIL)), QMNT, [QgBU]))(MlRM);
    },
    [ciFS]: function (onUM) {
        (new NativeFunction(Memory[glLS](Memory[glLS](onUM)[MVgS](3 * YGIL)), QMNT, [QgBU]))(onUM);
    },
    [wdwS]: function (IiLM) {
        (new NativeFunction(Memory[glLS](Memory[glLS](IiLM)[MVgS](6 * YGIL)), QMNT, [QgBU]))(IiLM);
        (new NativeFunction(Memory[glLS](Memory[glLS](IiLM)[MVgS](1 * YGIL)), QMNT, [QgBU]))(IiLM);
    }
};

var kkOM = {
    [YezS]: function (MJPJ) { return Memory[ISaS](MJPJ[MVgS](1 * YGIL + 12)); },
    [saqS]: function (oLSJ) { return Memory[glLS](oLSJ[MVgS](1 * YGIL + 24)); },
    [UbtS]: function (IGJJ, kIMJ) { Memory[wBuP](IGJJ[MVgS](1 * YGIL + 24), kIMJ); },
    [YCxP]: function (EDDJ) { return Memory[ISaS](EDDJ[MVgS](1 * YGIL + 16)); },
    [syoP]: function (gFGJ, AAxJ) { Memory[EPUR](gFGJ[MVgS](1 * YGIL + 16), AAxJ); }
};

var cCAJ = {
    [UzrP]: function (cWnK) {
        return Memory[oviP](cWnK[MVgS](2)) << 16 | Memory[oviP](cWnK[MVgS](3)) << 8 | Memory[oviP](cWnK[MVgS](4));
    },
    [QwlP]: function (EXqK, YShK) {
        Memory[kscP](EXqK[MVgS](2), YShK >> 16 & 0xFF);
        Memory[kscP](EXqK[MVgS](3), YShK >> 8 & 0xFF);
        Memory[kscP](EXqK[MVgS](4), YShK & 0xFF);
    },
    [MtfP]: function (AUkK, UPbK) {
        Memory[kscP](AUkK[MVgS](0), UPbK >> 8 & 0xFF);
        Memory[kscP](AUkK[MVgS](1), UPbK & 0xFF);
    },
    [MNSP]: function (wReK) {
        return Memory[oviP](wReK[MVgS](5)) << 8 | Memory[oviP](wReK[MVgS](6));
    },
    [oPVP]: function (QMVJ, sOYJ) {
        Memory[kscP](QMVJ[MVgS](5), sOYJ >> 8 & 0xFF);
        Memory[kscP](QMVJ[MVgS](6), sOYJ & 0xFF);
    },
    [EjIS]: function (siMK) {
        return Memory[oviP](siMK) << 8 | Memory[oviP](siMK[MVgS](1));
    }
};

var UjPK = {
    [IKMP]: function (ofGK) { return Memory[ISaS](ofGK[MVgS](1 * YGIL)); },
    [kMPP]: function (QgJK, kcAK) { return Memory[glLS](Memory[glLS](QgJK)[MVgS](YGIL * kcAK)); },
    [EHGP]: function (MdDK, gZtK, IaxK) { Memory[wBuP](Memory[glLS](MdDK)[MVgS](YGIL * gZtK), IaxK); },
    [gJJP]: function (IukL) { return Memory[ISaS](IukL[MVgS](1 * YGIL + 4)); },
    [AEAP]: function (kwnL) {
        Memory[EPUR](kwnL[MVgS](1 * YGIL + 4), Memory[ISaS](kwnL[MVgS](1 * YGIL + 4)) - 1);
    },
    [cGDP]: function (EreL) {
        Memory[EPUR](EreL[MVgS](1 * YGIL + 4), Memory[ISaS](EreL[MVgS](1 * YGIL + 4)) + 1);
    },
    [carQ]: function (gthL) { return Memory[ISaS](gthL[MVgS](1 * YGIL + 8)); },
    [EbuQ]: function (AoYK) { return Memory[ISaS](AoYK[MVgS](1 * YGIL + 12)); },
    [YWkQ]: function (cqbL, wlSK) { Memory[EPUR](cqbL[MVgS](1 * YGIL + 8), wlSK); },
    [AYnQ]: function (YmVK, AMWH) { Memory[EPUR](YmVK[MVgS](1 * YGIL + 12), AMWH); },
    [UTeQ]: function (cOZH, wJQH) {
        UDCL(cOZH[wVhQ](64));
        var YKTH = UjPK[EbuQ](cOZH);
        UjPK[EHGP](cOZH, YKTH, wJQH);
        UjPK[AYnQ](cOZH, (YKTH + 1) % UjPK[IKMP](cOZH));
        UjPK[cGDP](cOZH);
        wFFL(cOZH[wVhQ](64));
    },
    [QQYP]: function (sGKH) {
        var UHNH = null;
        UDCL(sGKH[wVhQ](64));
        if (UjPK[gJJP](sGKH)) {
            var QEHH = UjPK[carQ](sGKH);
            UHNH = UjPK[kMPP](sGKH, QEHH);
            UjPK[YWkQ](sGKH, (QEHH + 1) % UjPK[IKMP](sGKH));
            UjPK[AEAP](sGKH);
        }
        wFFL(sGKH[wVhQ](64));
        return UHNH;
    }
};

function QYuI() {
    Interceptor[sSbQ](Module[sOQT](UPTT, smPQ), {
        [UnSQ]: function (sayI) {
            if (oztL(Memory[ojJQ](sayI[1][MVgS](2))) === 9339) {
                IqZO[QkMQ] = sayI[0][kgDQ]();
                if (IqZO[YSZT][MhGQ]) {
                    var ISiI = Memory[gdxQ](IqZO[YSZT][MhGQ]);
                    Memory[EPUR](sayI[1][MVgS](4), oTgM(ISiI));
                }
                kUlI();
            }
        }
    });
}

function kUlI() {
    IqZO[IeAQ] = [];
    var gRfI = 0;
    for (gRfI = 0; gRfI < YiKO[kEBN]; gRfI++) {
        IqZO[IeAQ][MFEN](IqZO[gBvN][MVgS](YiKO[gRfI]));
    }
    IqZO[ICyN] = IqZO[gBvN][MVgS](AkNO);
    IqZO[cypN] = Memory[glLS](IqZO[gBvN][MVgS](cmQO));
    IqZO[EzsN] = IqZO[gBvN][MVgS](whHO);
    IqZO[YujN] = Memory[glLS](IqZO[cypN][MVgS](4));
    IqZO[AwmN] = Memory[glLS](IqZO[YujN][MVgS](52));
    IqZO[AQZN] = IqZO[YujN][MVgS](60);
    IqZO[cScO] = IqZO[YujN][MVgS](84);
    IqZO[wNTN] = IqZO[YujN][MVgS](208);
    IqZO[YOWN] = IqZO[YujN][MVgS](212);

    IqZO[sKNN] = new NativeFunction(IqZO[gBvN][MVgS](EnTO), QgBU, [MdvU]);
    IqZO[ULQN] = new NativeFunction(IqZO[gBvN][MVgS](UfEO), QgBU, [QgBU, MdvU]);

    IqZO[oHHN] = function (glTI) {
        sWmM[AgCS](glTI);
        var ImWI = sWmM[kUdS](glTI);
        var ciNI = kkOM[YezS](ImWI);
        var EjQI = IqZO[sKNN](ciNI + 7);
        MxqL(EjQI[MVgS](7), kkOM[saqS](ImWI), ciNI);
        cCAJ[QwlP](EjQI, ciNI);
        cCAJ[MtfP](EjQI, sWmM[EjIS](glTI));
        cCAJ[oPVP](EjQI, sWmM[gRXR](glTI));
        QUjM(IqZO[QkMQ], EjQI, ciNI + 7, 0);
        AILL(EjQI);
        sWmM[wdwS](glTI);
    };
}

function YeHI() {
    var AgKI = UjPK[QQYP](IqZO[cScO]);
    while (AgKI) {
        var UbBI = sWmM[EjIS](AgKI);
        if (UbBI === 10100) {
            AgKI = Memory[glLS](IqZO[YOWN]);
            Memory[wBuP](IqZO[YOWN], ptr(0));
        }
        IqZO[oHHN](AgKI);
        AgKI = UjPK[QQYP](IqZO[cScO]);
    }
}

function wxrJ() {
    var YyuJ = IqZO[sKNN](7);
    kQaM(IqZO[QkMQ], YyuJ, 7, 256);
    var sulJ = cCAJ[EjIS](YyuJ);
    if (sulJ === 20104) {
        Memory[EPUR](IqZO[wNTN], 5);
    }
    var orfJ = cCAJ[UzrP](YyuJ);
    var QsiJ = cCAJ[MNSP](YyuJ);
    AILL(YyuJ);

    var koZI = IqZO[sKNN](orfJ);
    kQaM(IqZO[QkMQ], koZI, orfJ, 256);

    var MpcJ = IqZO[ULQN](IqZO[AwmN], sulJ);
    sWmM[cORR](MpcJ, QsiJ);
    var oPdG = sWmM[kUdS](MpcJ);
    kkOM[syoP](oPdG, orfJ);
    if (orfJ) {
        var kMXF = IqZO[sKNN](orfJ);
        MxqL(kMXF, koZI, orfJ);
        kkOM[UbtS](oPdG, kMXF);
    }
    sWmM[ciFS](MpcJ);
    UjPK[UTeQ](IqZO[AQZN], MpcJ);
    AILL(koZI);
}

Interceptor[QIKN](Module[sOQT](UPTT, IapU), new NativeCallback(function (MNaG) {
    if (!this[QcyO][seBO](IqZO[ICyN])) {
        return QAwL(MNaG);
    }
    var IKUF = Memory[glLS](this[MZrO][obvO][MVgS](YGIL));
    var EHOF = 0;
    for (EHOF = 0; EHOF < IqZO[IeAQ][kEBN]; EHOF++) {
        if (IKUF[seBO](IqZO[IeAQ][EHOF])) {
            YeHI();
            return 0;
        }
    }
    return QAwL(MNaG);
}, MdvU, [QgBU]));

Interceptor[QIKN](Module[sOQT](UPTT, kcsU), new NativeCallback(function (gdFG, AYvG, cazG, wVpG, YWsG) {
    var sSjG = sCzL(gdFG, AYvG, cazG, wVpG, YWsG);
    if (this[QcyO][seBO](IqZO[EzsN])) {
        wxrJ();
    }
    return sSjG;
}, MdvU, [MdvU, QgBU, QgBU, QgBU, QgBU]));

!function () {
    if (bIJgb.Jb) rpc[IWlO] = {
        [kYoO]: function (UnaH, wpdH) {
            IqZO[YSZT] = wpdH || {};
            MRdM(ETfO, function () {
                Interceptor[gViO]();
                IqZO[gBvN] = Process[gpWO](ETfO)[gBvN];
                QYuI();
            });
        }
    };
}();