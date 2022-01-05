const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const { users } = require('../database/models');
const { jwtKey } = require('../helpers/index');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const authLogin = async (email, password) => {
  const user = await users.findOne({ where: { [Op.and]: [{ email }, { password }] } });
  if (!user) throw new Error('Not Found');
  console.log(user, 'USER');
  const userWithoutPwd = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign({ data: userWithoutPwd }, jwtKey, jwtConfig);

  return {
    ...userWithoutPwd,
    token,
  };
};

module.exports = {
  authLogin,
};
