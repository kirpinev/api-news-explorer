const router = require('express').Router();
const cors = require('cors');

// const whiteList = ['http://localhost:8080/'];
//
// const corsOptions = {
//   origin(origin, callback) {
//     if (whiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

const corsOptions = {
  origin: 'http://localhost:8080/',
  optionsSuccessStatus: 200
}

router.use(cors(corsOptions));

module.exports = router;
