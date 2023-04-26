const COMMANDS = {
    ADD: 'add',
    A: 'a',
    GENERATE: 'generate',
    GEN: 'gen',
    CURL: 'curl',
    C: 'c',
    LIST: 'list',
    LS: 'ls',
    SHOW: 'show',
    S: 's',
    REMEMBER: 'remember',
    REM: 'rem',
    RECALL: 'recall',
    R: 'r',
    SAVE_RAW: 'save-raw',
    SR: 'sr',
    CLEAR: 'clear',
    DROP: 'drop',
    HELP: 'help'
};

const COMMANDS_DESCRIPTION = [
    [[COMMANDS.ADD, COMMANDS.A],, 'Adds a request in an interactive mode and stores it'],
    [[COMMANDS.GENERATE, COMMANDS.GEN],, 'Generates requests in a specified format (curl, by default) and stores them'],
    [[COMMANDS.CURL, COMMANDS.C], '<name>', 'Shows curl for a specified request'],
    [[COMMANDS.LIST, COMMANDS.LS],, 'Lists all stored requests'],
    [[COMMANDS.SHOW, COMMANDS.S], '[<format>] <name>', `Shows stored request's data`],
    [[COMMANDS.REMEMBER, COMMANDS.REM], '<name>', 'Remembers a request for a later usage'],
    [[COMMANDS.RECALL, COMMANDS.R],, 'Shows remembered request'],
    [[COMMANDS.SAVE_RAW, COMMANDS.SR], '<name>', 'Saves raw request as a string'],
    [[COMMANDS.CLEAR], '<name>', 'Removes persisted request'],
    [[COMMANDS.DROP],, 'Removes all persisted requests data'],
    [[COMMANDS.HELP],, 'Displays all commands in a table format']
];

const CONSOLE_COLORS = {
    RESET: '\x1b[0m',
    RED: '\x1b[31m',
    CYAN: '\x1b[36m',
    GREEN: '\x1b[32m',
    WHITE: '\x1b[37m',
    MAGENTA: '\x1b[35m'
};

const PERSISTENCE_STRUCTURE_KEYS = {
    DATA: 'data'
};

const INITIAL_PERSISTENCE_STRUCTURE = {
    [PERSISTENCE_STRUCTURE_KEYS.DATA]: {}
};

const SUPPORTED_FORMATS = ['curl'];

module.exports = {
    COMMANDS,
    CONSOLE_COLORS,
    PERSISTENCE_STRUCTURE_KEYS,
    INITIAL_PERSISTENCE_STRUCTURE,
    COMMANDS_DESCRIPTION,
    SUPPORTED_FORMATS
};

