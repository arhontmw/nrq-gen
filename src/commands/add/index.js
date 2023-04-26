const {
    utils,
    Logger,
    errors
} = require('../../deps');
const { ADD_COMMAND_STEPS } = require('./steps');
const {
    cli: { formatStep },
    readline: { question },
    persistence: { saveRequestData },
    checkArgs: { noCheck }
} = utils;

const run = async () => {
    const result = {};

    for (const { text, onResponse, extra, required } of ADD_COMMAND_STEPS ) {
        const value = await question(formatStep(text, extra));

        if (!value && required) {
            throw errors.fieldRequired(text)
        }

        onResponse(result, value.trim());
    }

    saveRequestData({
        name: result.name,
        requestData: result
    });

    Logger.log();
    Logger.success('Request successfully saved');
};

module.exports = {
    run,
    checkArgs: noCheck
};
