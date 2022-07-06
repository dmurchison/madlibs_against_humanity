// validation/madlibs.js
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMadlibInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : '';

  if (!Validator.isLength(data.body, { min: 20 })) {
    errors.body = 'Madlib cant be smaller than 20 characters';
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Madlib body is required';
  }

  if (Validator.isEmpty(data.title)) {
    errors.body = 'Title is required';
  }

  // if (!data.blanks.length) {
  //   errors.body = 'Madlib requires blanks';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
