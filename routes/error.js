const router = require('express').Router();
const { messages } = require('../utils');
const { NotFoundError } = require('../errors');

router.all('*', (req, res, next) => next(new NotFoundError(messages.root.isNotFound)));

module.exports = router;
