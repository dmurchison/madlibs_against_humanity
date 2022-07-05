
// Makes sure the input value is not only a string, but a not-empty string
const validText = str => {
  return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;
