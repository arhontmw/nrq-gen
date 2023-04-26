const { processLib, childProcess, Logger } = require('../deps');

const isPbCopyAvailable = () => processLib.platform === 'darwin';

const copyToClipboard = (string) => {
    if (!isPbCopyAvailable()) {
        return;
    }

    childProcess.execSync(`echo "${string}" | pbcopy`);
};

module.exports = {
    copyToClipboard
};
