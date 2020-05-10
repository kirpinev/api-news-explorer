const router = require('express').Router();
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://kirpinev.github.io'],
  optionsSuccessStatus: 200,
  credentials: true
}

router.use(cors(corsOptions));

module.exports = router;

// const allowedCors = ['http://localhost:8080', 'https://kirpinev.github.io'];
//
// module.exports.cors = (req, res, next) => {
//   const { origin } = req.headers;
//
//   if (allowedCors.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
//     );
//     res.header(
//       'Access-Control-Allow-Methods',
//       'GET,HEAD,PUT,PATCH,POST,DELETE'
//     );
//   }
//
//   next();
// };
