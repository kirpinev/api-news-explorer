const router = require('express').Router();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10000,
});

router.use(limiter);

module.exports = router;
