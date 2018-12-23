'use strict';

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000' || 'http://localhost:3001',
  DATABASE_URL:
      process.env.DATABASE_URL || 'postgres://localhost/petful',
  TEST_DATABASE_URL:
      process.env.TEST_DATABASE_URL ||
      'postgres://localhost/petful-test'
};
