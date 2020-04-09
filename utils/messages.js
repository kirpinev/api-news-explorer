const messages = {
  registration: {
    allFields: {
      isRequired: 'Необходимо передать все поля (email, password, name)',
    },
    password: {
      tooShort: 'Длина пароля должна быть минимум 8 символов',
      isRequired: 'Пароль обязателен',
      isEmpty: 'Поле пароля не может быть пустысым',
    },
    email: {
      isEmpty: 'Поле почты не может быть пустым',
      isRequired: 'Поле почты обязательно',
      isInvalid: 'Почта должна быть валидной',
      shouldBeUnique: 'Почта должна быть уникальной',
    },
  },
  authorization: {
    isRequired: 'Нужна авторизация',
    isSuccessful: 'Вход успешно выполнен',
    isFailed: 'Неправильные почта или пароль',
    allFields: {
      isRequired: 'Необходимо передать оба поля email и password',
    },
  },
  user: {
    id: {
      isNotFound: 'Нет пользователя с такими id',
      isNotValid: 'Id пользователя не соответствует стандарту',
    },
  },
  article: {
    deletion: {
      isForbidden: 'Недостаточно прав для удаления новости',
      isDeleted: 'Новость успешно удалена',
    },
    id: {
      isNotFound: 'Нет новости с таким id',
      isNotValid: 'Id новости не соответствует стандарту',
    },
  },
  root: {
    isNotFound: 'Запрашиваемый ресурс не найден',
  },
};

module.exports = {
  messages,
};
