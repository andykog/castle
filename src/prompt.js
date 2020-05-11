const readline = require('readline');
const chalk = require('chalk');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Style = {
  Default: 'default',
  Dangerous: 'dangerous',
}

const getDefaultOptions = () => ({
  allowEmpty: true,
  defaultValue: undefined,
  style: Style.Default,
  valuesMessage: undefined,
});

const prompt = async (question, options = {}) => {
  options = Object.assign(getDefaultOptions(), options);

  let message = question;

  if (!options.valuesMessage && options.defaultValue) {
    options.valuesMessage = options.defaultValue;
  }

  if (options.valuesMessage) {
    message += ' ' + chalk.dim(`(${options.valuesMessage})`);
  }

  message += ': ';

  switch (options.style) {
    case Style.Dangerous:
      message = chalk.red(message);
      break;
    case Style.Default:
    default:
      break;
  }

  let answer = await new Promise((resolve) => rl.question(message, resolve));

  if (!answer && options.defaultValue) {
    answer = options.defaultValue;
  }

  if (answer || options.allowEmpty) {
    return answer;
  }

  return prompt(question, options);
};

prompt.Style = Style;

module.exports = prompt;
