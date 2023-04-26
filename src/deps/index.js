const deps = {
    fs: require('fs'),
    path: require('path'),
    readline: require('readline'),
    processLib: require('process'),
    childProcess: require('child_process'),
    console,
    constants: {
        common: require('../constants')
    },
    errors: require('../errors')
};

module.exports = deps;

deps.config = require('../config');
deps.Logger = require('../logger').Logger;
deps.utils = {
    cli: require('../utils/cli'),
    persistence: require('../utils/persistence'),
    readline: require('../utils/readline'),
    os: require('../utils/os'),
    checkArgs: require('../utils/check-args')
};
