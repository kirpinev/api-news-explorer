const bcrypt = require('bcryptjs');
const escape = require('escape-html');
const User = require('../models/user');
const { createToken, messages } = require('../utils');

const { BadRequestError, NotFoundError } = require('../errors');

module.exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    User.create({
      email: req.body.email,
      password: `${hash}`,
      name: escape(req.body.name),
    })
      .then((user) => {
        res.status(201).send({
          status: '201',
          data: {
            email: user.email,
            name: user.name,
          },
        });
      })
      .catch((err) => next(new BadRequestError(err.message)));
  });
};

module.exports.login = (req, res, next) => {
  User.findUserByCredentials(req.body.email, req.body.password)
    .then((user) => {
      const token = createToken(user);

      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
      });

      res
        .status(200)
        .send({ status: '200', message: messages.authorization.isSuccessful });
    })
    .catch(next);
};

module.exports.logout = (req, res, next) => {
  res.clearCookie('jwt', {
    httpOnly: true,
  });

  res.status(200).send({ status: '200', message: messages.logout.isSuccess });
};

module.exports.getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => new NotFoundError(messages.user.id.isNotFound))
    .then((user) => res.send({ status: '200', data: user }))
    .catch(next);
};
