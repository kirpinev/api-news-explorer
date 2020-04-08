const { Joi } = require('celebrate');
const { messages } = require('../utils');

module.exports.passwordSchema = Joi.string().required().min(8).messages({
  'any.required': messages.registration.password.isRequired,
  'string.empty': messages.registration.password.isEmpty,
  'string.min': messages.registration.password.tooShort,
});
