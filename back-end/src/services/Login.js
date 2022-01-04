const { users } = require('../database/models');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');

// const secret =

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'RS256',
};

const verifyExistenceUser = async (email, password) => {
  const user = await users.findOne({ where: { [Op.and]: [{ email }, { password }] } });
  if (!user) throw new Error('Incorrect email or password');
  const userWithoutPwd = {
    name: user.name,
    email: user.email,
    role: user.role,
  }
  const token = jwt.sign({ data: userWithoutPwd }, secret, jwtConfig);
  return {
    ...userWithoutPwd,
    token,
  };
};

const authLogin = async (email) => {
  const user = await users.findOne({ where: { email } });
  return user;
};

module.exports = {
  verifyExistenceUser,
  authLogin,
};
