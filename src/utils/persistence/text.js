const {
    fs,
    errors
} = require('../../deps');

const readFileText = ({
    filePath
}) => {
    if (!fs.existsSync(filePath)) {
        throw errors.noFileToRead(filePath);
    }

    return fs.readFileSync(filePath).toString();
};

const writeFileText = ({
    dirPath,
    filePath,
    data
}) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    fs.writeFileSync(filePath, data);
};

module.exports = {
    readFileText,
    writeFileText
};
