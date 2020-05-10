const router = require('express').Router();
const { auth } = require('../middlewares/auth');
const { getUserInfo } = require('../controllers/users');
const { verifyUserObjectId } = require('../middlewares/object-id');

router.use(auth);

router.get('/me', verifyUserObjectId, getUserInfo);

module.exports = router;
