const { path } = require('../deps');

const getConfig = () => {
    delete require.cache[require.resolve('./config.json')];

    return require('./config.json');
};

const getSaveOptions = () => getConfig().saveOptions;
const getDirName = () => getSaveOptions().dirName;
const getFileName = ({ postfix }) => `${getSaveOptions().fileName}${postfix ? `.${postfix}` : ''}`;
const getExt = () => getSaveOptions().ext;
const getRememberFilePath = () => path.resolve(`${getDirPath()}/${getSaveOptions().rememberName}`);
const getRawRequestsFilePath = () => path.resolve(`${getDirPath()}/${getSaveOptions().rawRequestsFileName}`);

const getDirPath = () => path.resolve(getDirName());
const getFilePath = ({ fileNamePostfix } = {}) =>
    path.resolve(`${getDirPath()}/${getFileName({ postfix: fileNamePostfix })}.${getExt()}`);

module.exports = {
    getConfig,
    getDirPath,
    getFilePath,
    getRememberFilePath,
    getRawRequestsFilePath
};
