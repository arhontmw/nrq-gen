#!/usr/bin/env node
const {
    Logger,
    constants,
    utils
} = require('../deps');
const { COMMANDS } = constants.common;
const { readline } = utils;
const {
    AddCommand,
    ListCommand,
    GenerateCommand,
    CurlCommand,
    ShowCommand,
    RememberCommand,
    RecallCommand,
    SaveRawCommand,
    ClearCommand,
    DropCommand,
    HelpCommand
} = require('../commands');

process.title = 'nrq';

const getCommandItems = (command) => {
    switch (command) {
        case COMMANDS.ADD:
        case COMMANDS.A:
            return [AddCommand, GenerateCommand];

        case COMMANDS.GENERATE:
        case COMMANDS.GEN:
            return [GenerateCommand];

        case COMMANDS.LIST:
        case COMMANDS.LS:
            return [ListCommand];

        case COMMANDS.SHOW:
        case COMMANDS.S:
            return [ShowCommand];

        case COMMANDS.CURL:
        case COMMANDS.C:
            return [CurlCommand];

        case COMMANDS.REMEMBER:
        case COMMANDS.REM:
            return [RememberCommand];

        case COMMANDS.RECALL:
        case COMMANDS.R:
            return [RecallCommand];

        case COMMANDS.SAVE_RAW:
        case COMMANDS.SR:
            return [SaveRawCommand];

        case COMMANDS.CLEAR:
            return [ClearCommand, GenerateCommand];

        case COMMANDS.DROP:
            return [DropCommand];

        case COMMANDS.HELP:
        default:
            return [HelpCommand];
    }
};

const [,,command, ...args] = process.argv.map(arg => arg?.trim().toLowerCase());

const runCommand = async ({ command, args }) => {
    try {
        const commandItems = getCommandItems(command);

        for (const commandItem of commandItems) {
            commandItem.checkArgs(...args);
            await commandItem.run(...args);
        }
    } catch (error) {
        Logger.error(`Something went wrong during a command "${command}" execution\n\n`, error);
        process.exit(1);
    } finally {
        readline.end();
    }
};

runCommand({ command, args });




