const router = require('express').Router();
const cors = require('cors');

const corsOptions = {
  origin: 'https://kirpinev.github.io/news-explorer/',
  optionsSuccessStatus: 200,
  credentials: true
}

router.use(cors(corsOptions));

module.exports = router;
