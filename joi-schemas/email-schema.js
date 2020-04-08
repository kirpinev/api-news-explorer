const { Joi } = require('celebrate');

module.exports.emailSchema = Joi.string().required().email().messages({
  'any.required': 'Поле почты обязательно',
  'string.email': 'Почта должна быть валидной',
});
