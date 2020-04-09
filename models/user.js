const mongoose = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');
const { messages } = require('../utils');
const { UnauthorizedError } = require('../errors');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Необходимо указать почту'],
      validate: {
        validator: (email) => validator.isEmail(email),
      },
    },
    password: {
      type: String,
      required: [true, 'Длинна пароля должна быть минимум 8 символов'],
      minlength: 8,
      select: false,
    },
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, 'Длина имени должна быть от 2 до 30 символов'],
    },
  },
  { versionKey: false },
);

userSchema.statics.findUserByCredentials = function findUserByCredentials(
  email,
  password,
) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(messages.authorization.isFailed);
      }

      return bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          throw new UnauthorizedError(messages.authorization.isFailed);
        }

        return user;
      });
    });
};

userSchema.plugin(uniqueValidator, {
  message: messages.registration.email.shouldBeUnique,
});

module.exports = mongoose.model('user', userSchema);
