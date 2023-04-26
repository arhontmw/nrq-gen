const {
    Logger,
    utils
} = require('../../deps');

const {
    cli: { formatStep },
    readline: { question },
    persistence: { saveRawRequestData },
    checkArgs: { noCheck }
} = utils;

const run = async () => {
    const nameValue = await question(formatStep('Name'));
    const requestValue = await question(formatStep('Request'));

    saveRawRequestData({
        name: nameValue.trim(),
        requestData: requestValue.trim()
    });
    Logger.success(`Raw request "${nameValue}" saved`);
};

module.exports = {
    run,
    checkArgs: noCheck
};
