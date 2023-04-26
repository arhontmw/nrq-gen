const { utils } = require('../../deps');
const {
    EXTRAS,
    splitIntoArray,
    formatQuestion
} = utils.cli;

const ADD_COMMAND_STEPS = [
    {
        text: 'Name',
        onResponse: (result, value) => result.name = value || 'default',
        required: true
    },
    {
        text: 'Origin',
        onResponse: (result, value) => result.origin = value || '',
        required: true
    },
    {
        text: 'Path',
        onResponse: (result, value) => result.path = value || '',
        extra: [EXTRAS.OPTIONAL]
    },
    {
        text: 'Method',
        onResponse: (result, value) => result.method = value.toUpperCase() || 'GET',
        extra: [EXTRAS.OPTIONAL]
    },
    {
        text: 'Cookie',
        onResponse: (result, value) => result.cookie = value || '',
        extra: [EXTRAS.OPTIONAL]
    },
    {
        text: 'Send JSON?',
        onResponse: (result, value) => result.json = ['yes', 'y'].includes(value),
        extra: [EXTRAS.YES_NO]
    },
    {
        text: 'Body',
        onResponse: (result, value) => {
            console.log('### BODY VALUE', value);
            result.body = JSON.parse(value?.trim() || null)
        },
        extra: [EXTRAS.OPTIONAL]
    },
    {
        text: 'Extra Headers',
        onResponse: (result, value) => result.extraHeaders = splitIntoArray(value),
        extra: [EXTRAS.ARRAY_SEPARATOR]
    }
];

module.exports = {
    ADD_COMMAND_STEPS,
    formatQuestion
};
