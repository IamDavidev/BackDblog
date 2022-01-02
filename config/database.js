// const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: "ec2-54-204-28-187.compute-1.amazonaws.com",
//       port: "onfig.port5432",
//       database: "da8mo502d9q2p2",
//       user: "rsrxijqgsudsgx",
//       password:
//         "9c9547cec7a0150b4b1e6f721fe8353c407120f56a2bb98cd43c2a636f9ba27e",
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     },
//     debug: false,
//   },
// });

const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
