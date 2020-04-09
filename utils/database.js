const { NODE_ENV, DATABASE_URL } = process.env;

module.exports.dataBaseUrl = NODE_ENV === 'production' ? DATABASE_URL : 'mongodb://localhost:27017/newsdb';

module.exports.dataBaseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
