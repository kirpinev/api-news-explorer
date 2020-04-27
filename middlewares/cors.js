const whiteList = ['http://localhost:8080/'];

module.exports.cors = (req, res, next) => {
  const { origin } = req.headers;

  if (whiteList.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
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
