const {
    config,
    constants
} = require('../../deps');
const { writeFileJson, readFileJson } = require('./json');

const {
    INITIAL_PERSISTENCE_STRUCTURE,
    PERSISTENCE_STRUCTURE_KEYS
} = constants.common;

const processDataCallbacks = {
    addByName: ({ name, requestData }) => (savedData) => {
        if (name) {
            savedData[PERSISTENCE_STRUCTURE_KEYS.DATA][name] = requestData;
        }

        return savedData;
    },
    removeByName: ({ name }) => (savedData) => {
        delete savedData[PERSISTENCE_STRUCTURE_KEYS.DATA][name];

        return savedData;
    }
};

const saveRequestData = ({
    requestData,
    name,
    format,
    processDataCb = processDataCallbacks.addByName
}) => {
    const dirPath = config.getDirPath();
    const filePath = config.getFilePath({ fileNamePostfix: format });

    writeFileJson({
        dirPath,
        filePath,
        processDataCb: processDataCb({ name, requestData })
    });
};

const readAllRequests = ({ format } = {}) => {
    const filePath = config.getFilePath({ fileNamePostfix: format });

    try {
        return readFileJson({ filePath });
    } catch {
        return INITIAL_PERSISTENCE_STRUCTURE;
    }
};

const getAllRequestsData = (allRequests) => allRequests[PERSISTENCE_STRUCTURE_KEYS.DATA];
const getAllRequestsEntries = (allRequests) => Object.entries(getAllRequestsData(allRequests));

module.exports = {
    processDataCallbacks,
    saveRequestData,
    readAllRequests,
    getAllRequestsData,
    getAllRequestsEntries
};
