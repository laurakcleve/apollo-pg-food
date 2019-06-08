const db = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'asdf',
    database: 'food2',
    charset: 'utf8',
  },
  debug: true,
});

module.exports = db;
