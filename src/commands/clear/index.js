const {
    Logger,
    utils,
    constants
} = require('../../deps');

const {
    persistence: {
        saveRequestData,
        processDataCallbacks
    },
    checkArgs: { checkName }
} = utils;

const run = (name) => {
    for (const format of [null, ...constants.common.SUPPORTED_FORMATS]) {
        saveRequestData({
            name,
            format,
            processDataCb: processDataCallbacks.removeByName
        });
    }

    Logger.success(`Request "${name}" removed`);
};

module.exports = {
    run,
    checkArgs: checkName
};
