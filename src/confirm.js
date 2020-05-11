const prompt = require('./prompt');

const YES_ANSWERS = ['yes', 'y'];

const confirm = async (question, options) => {
  options = Object.assign({}, options);

  if (options.defaultValue === undefined) {
    options.valuesMessage = 'yes/no';
  }

  if (options.defaultValue === true) {
    options.defaultValue = 'yes'
  } else if (options.defaultValue === false) {
    options.defaultValue = 'no'
  } else if (options.defaultValue !== undefined) {
    throw new Error(`options.defaultValue must be boolean, got ${options.defaultValue}`)
  }

  const value = await prompt(question, options);

  if (YES_ANSWERS.includes(value)) {
    return true;
  }
  return false;
}

confirm.Style = prompt.Style;

module.exports = confirm
