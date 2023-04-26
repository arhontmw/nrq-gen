const {
    Logger,
    constants,
    utils
} = require('../../deps');

const run = () => {
    Logger.log();
    Logger.log('Commands table:');

    const tableData = constants.common.COMMANDS_DESCRIPTION.reduce((res, [commands, args, description]) => {
        res[commands.join('/')] = {
            args: args || '',
            description
        };

        return res;
    }, {});

    Logger.table(tableData, ['args', 'description']);
};

module.exports = {
    run,
    checkArgs: utils.checkArgs.noCheck
};
