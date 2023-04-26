const { Logger, utils } = require('../../deps');

const {
    persistence: { removeAllRequestsData },
    checkArgs: { noCheck }
} = utils;

const run = () => {
    Logger.info('Removing all requests data...');

    removeAllRequestsData();

    Logger.success('All requests data removed');
};

module.exports = {
    run,
    checkArgs: noCheck
};
