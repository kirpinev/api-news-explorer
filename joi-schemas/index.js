const { Joi } = require('celebrate');
const { objectId } = require('./object-id-schema');
const { linkSchema } = require('./link-schema');
const { textSchema } = require('./text-schema');
const { emailSchema } = require('./email-schema');
const { passwordSchema } = require('./password-schema');

const registrationSchema = Joi.object().keys({
  email: emailSchema,
  password: passwordSchema,
  name: textSchema,
});

const loginSchema = Joi.object().keys({
  email: emailSchema,
  password: passwordSchema,
});

const objectIdSchema = Joi.object().keys({ id: objectId });

const articleSchema = Joi.object().keys({
  keyword: textSchema,
  title: textSchema,
  text: textSchema,
  date: textSchema,
  source: textSchema,
  link: linkSchema,
  image: linkSchema,
  owner: objectId,
});

module.exports = {
  registrationSchema,
  loginSchema,
  objectIdSchema,
  articleSchema,
};
