const {
    fs,
    constants,
    errors
} = require('../../deps');

const {
    INITIAL_PERSISTENCE_STRUCTURE
} = constants.common;

const readFileJson = ({
    filePath
}) => {
    if (!fs.existsSync(filePath)) {
        throw errors.noFileToRead(filePath);
    }

    return JSON.parse(fs.readFileSync(filePath));
};

const writeFileJson = ({
    dirPath,
    filePath,
    processDataCb
}) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(INITIAL_PERSISTENCE_STRUCTURE));
    }

    const processed = processDataCb(readFileJson({ filePath }));

    fs.writeFileSync(filePath, JSON.stringify(processed));
};

module.exports = {
    readFileJson,
    writeFileJson
};
