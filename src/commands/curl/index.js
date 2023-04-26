const ShowCommand = require('../show');

const run = (...args) => ShowCommand.run('curl', ...args);

module.exports = {
    run,
    checkArgs: ShowCommand.checkArgs
};
