const router = require('express').Router();

const whiteList = ['localhost:8080'];

const cors = (req, res, next) => {
  const { origin } = req.headers;

  if (whiteList.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
    );
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE'
    );
  }

  next();
};

router.use(cors);

module.exports = router;
