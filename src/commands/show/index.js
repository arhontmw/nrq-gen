const {
    utils,
    Logger,
    constants,
    errors
} = require('../../deps');

const {
    persistence: {
        readAllRequests,
        getAllRequestsData
    },
    checkArgs: { checkName }
} = utils;

const run = (formatOrName, name) => {
    let derivedFormat = name ? formatOrName : null;
    let derivedName = name || formatOrName;

    if (derivedFormat && !constants.common.SUPPORTED_FORMATS.includes(derivedFormat)) {
        throw errors.unsupportedFormat(derivedFormat);
    }

    const allRequests = readAllRequests({ format: derivedFormat });
    const allRequestsData = getAllRequestsData(allRequests);

    if (allRequestsData[derivedName]) {
        Logger.log();
        Logger.success(`Request by key "${derivedName}":`);
        if (derivedFormat) {
            Logger.info(`Format: ${derivedFormat}`);
        }
        Logger.log();
        Logger.log(allRequestsData[derivedName]);
    } else {
        Logger.error(`Did not find request by name "${derivedName}"`);
    }
};

module.exports = {
    run,
    checkArgs: checkName
};

