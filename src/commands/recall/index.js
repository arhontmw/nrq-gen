const {
    Logger,
    utils
} = require('../../deps');
const {
    persistence: { recallRequest },
    os: { copyToClipboard },
    checkArgs: { noCheck }
} = utils;

const run = () => {
    try {
        const requestString = recallRequest();

        Logger.log();
        Logger.log(requestString);
        Logger.log();

        copyToClipboard(requestString);

        Logger.info('Copied to clipboard');
    } catch (_) {
        Logger.error('No remembered request. Nothing to recall.');
    }
};

module.exports = {
    run,
    checkArgs: noCheck
};
