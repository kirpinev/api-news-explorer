const router = require('express').Router();
const { auth } = require('../middlewares/auth');
const {
  createArticle,
  getUserArticles,
  deleteUserArticle,
} = require('../controllers/articles');
const {
  verifyUserObjectId,
  verifyArticleObjectId,
} = require('../middlewares/object-id');

router.use(auth);

router.get('/', verifyUserObjectId, getUserArticles);

router.post('/', verifyUserObjectId, createArticle);

router.delete(
  '/:id',
  verifyUserObjectId,
  verifyArticleObjectId,
  deleteUserArticle
);

module.exports = router;
