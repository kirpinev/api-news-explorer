const { ObjectId } = require('mongodb');
const { messages } = require('../utils');
const { BadRequestError } = require('../errors');

module.exports.verifyArticleObjectId = (req, res, next) =>
  ObjectId.isValid(req.params.id)
    ? next()
    : next(new BadRequestError(messages.article.id.isNotValid));

module.exports.verifyUserObjectId = (req, res, next) =>
  ObjectId.isValid(req.user._id)
    ? next()
    : next(new BadRequestError(messages.user.id.isNotValid));
