const {
    utils,
    Logger
} = require('../../deps');

const {
    persistence: {
        readAllRequests,
        getAllRequestsEntries
    },
    checkArgs: { noCheck }
} = utils;

const run = () => {
    const allRequests = readAllRequests();
    const allRequestsEntries = getAllRequestsEntries(allRequests);

    Logger.log();
    Logger.log('Requests list:');

    let i = 1;
    for (const [key] of allRequestsEntries) {
        Logger.info(`(${i++}) ${key}`);
    }

    Logger.log();
    Logger.success(`Total number of requests: ${allRequestsEntries.length}`);
};

module.exports = {
    run,
    checkArgs: noCheck
};
