const {
    fs,
    config
} = require('../../deps');

const removeAllRequestsData = () => {
    const dirPath = config.getDirPath();

    fs.rmSync(dirPath, { recursive: true, force: true });
};

module.exports = {
    removeAllRequestsData
};
