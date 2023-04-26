const {
    config
} = require('../../deps');
const { writeFileText, readFileText } = require('./text');

const rememberRequestData = (
    requestData
) => {
    writeFileText({
        dirPath: config.getDirPath(),
        filePath: config.getRememberFilePath(),
        data: requestData
    });
};

const recallRequest = () => readFileText({ filePath: config.getRememberFilePath() });

module.exports = {
    rememberRequestData,
    recallRequest
};
