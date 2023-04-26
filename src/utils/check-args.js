const { errors } = require('../deps');

const noCheck = Function.prototype;

const checkName = (name) => {
    if (!name) {
        throw errors.nameRequired();
    }
}

module.exports = {
    noCheck,
    checkName
};
