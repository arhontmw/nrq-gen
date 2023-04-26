const {
    config,
    constants
} = require('../../deps');
const { writeFileJson, readFileJson } = require('./json');
const { processDataCallbacks } = require('./requests');

const {
    INITIAL_PERSISTENCE_STRUCTURE
} = constants.common;

const saveRawRequestData = ({ name, requestData }) => {
    writeFileJson({
        dirPath: config.getDirPath(),
        filePath: config.getRawRequestsFilePath(),
        processDataCb: processDataCallbacks.addByName({ name, requestData })
    });
};

const readAllRawRequests = () => {
    try {
        return readFileJson({ filePath: config.getRawRequestsFilePath() });
    } catch {
        return INITIAL_PERSISTENCE_STRUCTURE;
    }
};

module.exports = {
    saveRawRequestData,
    readAllRawRequests
};
