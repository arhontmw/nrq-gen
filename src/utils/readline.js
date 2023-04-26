const { processLib, readline } = require('../deps');
const { stdin: input, stdout: output } = processLib;

const rl = readline.createInterface({ input, output });

const question = (query) => new Promise(resolve => rl.question(query, resolve));
const end = () => rl.close()

module.exports = {
    question,
    end
};
