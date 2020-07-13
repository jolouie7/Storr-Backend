// Update with your config settings.

// module.exports = {

//   development: {
//     client: 'pg',
//     connection: {
//       filename: './dev.pg'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };

// ----------------------------------------------- above is what came when intializing the file

// // Enable .env
// require("dotenv").config();

// // DATABASE_URL env should follow this format:
// // postgres://user_name:password@ipaddress:port/table
// // Example: postgres://jimmy:password@localhost:5432/pg_database

// module.exports = {
//   development: {
//     client: "pg",
//     // 🔻 Points to our local Postgresql database
//     // connection: process.env.DATABASE_URL
//     connection: {
//       database: process.env.POSTGRES_DB,
//       user: process.env.POSTGRES_USER,
//       password: process.env.POSTGRES_PASSWORD
//     }
//   },
// };

// ----------------------------------------------- above is from a Dev.to blog post and knex cheatsheet

// module.exports = {
//   development: {
//     client: "pg",
//     connection: "postgres://localhost:5000/storr",
//     migrations: {
//       directory: "./migrations",
//     },
//     seeds: {
//       directory: "./db/seeds/dev",
//     },
//     useNullAsDefault: true,
//   },

//   test: {
//     client: "pg",
//     connection: "postgres://localhost/storr_test",
//     migrations: {
//       directory: "./db/migrations",
//     },
//     seeds: {
//       directory: "./db/seeds/test",
//     },
//     useNullAsDefault: true,
//   },

//   production: {
//     client: "pg",
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: "./db/migrations",
//     },
//     seeds: {
//       directory: "./db/seeds/production",
//     },
//     useNullAsDefault: true,
//   },
// };


require("dotenv").config();

module.exports = {
  development: {
    debug: true,
    client: "pg",
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  test: {
    client: "pg",
    connection: {
      // TODO: update postgres container to create test db on start
      database: process.env.POSTGRES_TEST_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};