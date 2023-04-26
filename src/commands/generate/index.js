const {
    Logger,
    utils,
    constants
} = require('../../deps');

const {
    persistence: {
        readAllRequests,
        saveRequestData,
        getAllRequestsEntries
    },
    checkArgs: { noCheck }
} = utils;

const run = () => {
    const allRequests = readAllRequests();

    for (const format of constants.common.SUPPORTED_FORMATS) {
        const { generate } = require(`./generators/${format}`);

        for (const [name, requestData] of getAllRequestsEntries(allRequests)) {
            const generatedData = generate(requestData);

            saveRequestData({
                name,
                requestData: generatedData,
                format
            });
        }

        Logger.success(`Generated all requests to format: ${format}`);
    }
};

module.exports = {
    run,
    checkArgs: noCheck
};
