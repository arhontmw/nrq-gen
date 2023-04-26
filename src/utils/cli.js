const { constants } = require('../deps');
const { CONSOLE_COLORS } = constants.common;

const EXTRAS = {
    OPTIONAL: '(optional)',
    YES_NO: '(y/n)',
    ARRAY_SEPARATOR: '(use $$ to separate)'
};

const splitIntoArray = (string) => string ? string.split('$$').map(element => element.trim()) : [];

const formatStep = (text, extras) =>
    ` ${
        CONSOLE_COLORS.CYAN
    }${
        text
    }${
        CONSOLE_COLORS.RESET
    }${
        extras?.length ? ` ${extras.join(' ')}` : ''
    }: `

module.exports = {
    EXTRAS,
    splitIntoArray,
    formatStep
};
