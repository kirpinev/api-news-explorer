const escape = require('escape-html');
const Article = require('../models/article');
const { messages } = require('../utils');

const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
} = require('../errors');

module.exports.createArticle = (req, res, next) =>
  Article.create({
    keyword: escape(req.body.keyword),
    title: escape(req.body.title),
    text: escape(req.body.text),
    date: escape(req.body.date),
    source: escape(req.body.source),
    link: req.body.link,
    image: req.body.image,
    owner: req.user._id,
  })
    .then((article) =>
      res.status(201).send({
        data: {
          keyword: article.keyword,
          title: article.title,
          text: article.text,
          date: article.date,
          source: article.source,
          link: article.link,
          image: article.image,
        },
      })
    )
    .catch((err) => next(new BadRequestError(err.message)));

module.exports.getUserArticles = (req, res, next) =>
  Article.find({ owner: req.user._id })
    .then((articles) => res.send({ data: articles }))
    .catch(next);

module.exports.deleteUserArticle = (req, res, next) =>
  Article.findById(req.params.id)
    .select('+owner')
    .orFail(() => new NotFoundError(messages.article.id.isNotFound))
    .then((article) => {
      if (article.owner.toString() !== req.user._id) {
        throw new UnauthorizedError(messages.authorization.isRequired);
      }

      return Article.deleteOne(article)
        .then(() => res.send({ message: messages.article.isDeleted }))
        .catch(next);
    })
    .catch(next);