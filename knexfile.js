'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/petful',
    debug: true, // http://knexjs.org/#Installation-debug
    pool: { min: 1, max: 2 }
  },
  test: {
    client: 'pg',
    connection: process.env.TEST_DATABASE_URL || 'postgres://localhost/petful-test',
    debug: true,
    pool: { min: 1, max: 2}
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://bqlliyzhdglqcs:280a14c61c369f74238052e0806058a9e07810cb5c824acad62f4d03bdec3324@ec2-54-225-150-216.compute-1.amazonaws.com:5432/d9332dr801j9bs',
      user:     'username',
      password: 'password'
    }
  }
};
