const { constants, console } = require('../deps');
const { CONSOLE_COLORS } = constants.common;

class Logger {
    static info(...args) {
        console.log(
            CONSOLE_COLORS.CYAN,
            ...args,
            CONSOLE_COLORS.RESET
        );
    }

    static success(...args) {
        console.log(
            CONSOLE_COLORS.GREEN,
            ...args,
            CONSOLE_COLORS.RESET
        );
    }

    static error(...args) {
        console.log(
            CONSOLE_COLORS.RED,
            ...args,
            CONSOLE_COLORS.RESET
        );
    }

    static log(...args) {
        console.log(...args);
    }

    static table(...args) {
        console.table(...args);
    }
}

module.exports = { Logger };
