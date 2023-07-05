const os = require('os');

function getStats() {
    const { arch, freemem, totalmem, platform } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const stage = (fRam / tRam) * 100;

    return {
        OS: platform(),
        Arch: arch(),
        FreeRAM: `${parseInt(fRam)} MB`,
        Totalmem: `${parseInt(tRam)} MB`,
        Usage: `${parseInt(stage)}%`,
    };
}

module.exports = getStats;
