const { errors } = require('celebrate');
const router = require('express').Router();

const middlewares = require('../middlewares');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const { errorHandler } = require('../middlewares/error-handler');

const registration = require('./registration');
const authorization = require('./authorization');
const users = require('./users');
const articles = require('./articles');
const error = require('./error');

router.use(requestLogger);
router.use(middlewares);

router.use('/signup', registration);
router.use('/signin', authorization);
router.use('/users', users);
router.use('/articles', articles);
router.use('*', error);

router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;
