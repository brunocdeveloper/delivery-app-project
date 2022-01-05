const jwtKey = require('fs')
  .readFileSync(`${__dirname}/../../jwt.evaluation.key`, { encoding: 'utf-8' })
  .trim();

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

module.exports = {
  jwtKey,
  jwtConfig,
};
