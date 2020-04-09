const { Joi } = require('celebrate');
const { messages } = require('../utils');

module.exports.emailSchema = Joi.string().required().email().messages({
  'string.empty': messages.registration.email.isEmpty,
  'any.required': messages.registration.email.isRequired,
  'string.email': messages.registration.email.isInvalid,
});
