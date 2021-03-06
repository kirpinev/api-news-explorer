const router = require('express').Router();
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://kirpinev.github.io'],
  optionsSuccessStatus: 200,
  credentials: true
}

router.use(cors(corsOptions));

module.exports = router;

