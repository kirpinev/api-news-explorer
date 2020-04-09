const mongoose = require('mongoose');
const validator = require('validator');

const articleSchema = new mongoose.Schema(
  {
    keyword: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, 'Длина ключевого слова должна быть от 2 до 30 символов'],
    },
    title: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, 'Длина заголовка должна быть от 2 до 30 символов'],
    },
    text: {
      type: String,
      minlength: 2,
      required: [true, 'Длина текста статьи должна быть минимум 2 символа'],
    },
    date: {
      type: String,
      minlength: 2,
      required: [true, 'Дата статьи обязательна'],
    },
    source: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, 'Источник статьи обязателен'],
    },
    link: {
      type: String,
      validate: {
        validator: (link) => validator.isURL(link),
        message: 'Неправильный формат ссылки',
      },
      required: [true, 'Ссылка на статью обязательна'],
    },
    image: {
      type: String,
      validate: {
        validator: (link) => validator.isURL(link),
        message: 'Неправильный формат ссылки',
      },
      required: [true, 'Ссылка на картинку обязательна'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
      select: false,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('article', articleSchema);
