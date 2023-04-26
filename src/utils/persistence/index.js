const remember = require('./remember');
const requests = require('./requests');
const raw = require('./raw');
const text = require('./text');
const json = require('./json');
const drop = require('./drop');

module.exports = {
    ...remember,
    ...requests,
    ...raw,
    ...text,
    ...json,
    ...drop
};
