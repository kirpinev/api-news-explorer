// const router = require('express').Router();
// const cors = require('cors');
//
// const corsOptions = {
//   origin: 'http://localhost:8080',
//   optionsSuccessStatus: 200,
//   credentials: true
// }
//
// router.use(cors(corsOptions));
//
// module.exports = router;

const allowedCors = ['http://localhost:8080'];

module.exports.cors = (req, res, next) => {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE'
    );
  }

  next();
};
