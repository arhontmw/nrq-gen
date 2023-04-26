const {
    Logger,
    utils,
    errors
} = require('../../deps');

const {
    persistence: {
        readAllRequests,
        getAllRequestsData,
        rememberRequestData
    },
    checkArgs: { checkName }
} = utils;

const run = (name) => {
    const allRequests = readAllRequests({ format: 'curl' });
    const allRequestsData = getAllRequestsData(allRequests);

    if (!allRequestsData[name]) {
        Logger.error(`No request found for name "${name}"`);
        return;
    }

    rememberRequestData(allRequestsData[name]);
    Logger.success(`Remembered request "${name}"`);
};

module.exports = {
    run,
    checkArgs: checkName
};
