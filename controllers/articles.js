const escape = require('escape-html');
const Article = require('../models/article');
const { messages } = require('../utils');

const { BadRequestError, NotFoundError, ForbiddenError } = require('../errors');

module.exports.createArticle = (req, res, next) => {
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
    .then((article) => {
      res.status(201).send({
        status: '201',
        data: {
          keyword: article.keyword,
          title: article.title,
          text: article.text,
          date: article.date,
          source: article.source,
          link: article.link,
          image: article.image,
        },
      });
    })
    .catch((err) => next(new BadRequestError(err.message)));
};

module.exports.getUserArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.send({ status: '200', data: articles }))
    .catch(next);
};

module.exports.deleteUserArticle = (req, res, next) => {
  Article.findById(req.params.id)
    .select('+owner')
    .orFail(() => new NotFoundError(messages.article.id.isNotFound))
    .then((article) => {
      if (article.owner.toString() !== req.user._id) {
        throw new ForbiddenError(messages.article.deletion.isForbidden);
      }

      return Article.deleteOne(article)
        .then(() =>
          res.send({
            status: '200',
            message: messages.article.deletion.isDeleted,
          })
        )
        .catch(next);
    })
    .catch(next);
};
