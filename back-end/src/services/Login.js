const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const { users } = require('../database/models');
const { jwtKey, jwtConfig } = require('../helpers/index');

const authLogin = async (email, password) => {
  const user = await users.findOne({ where: { [Op.and]: [{ email }, { password }] } });
  if (!user) throw new Error('Not Found');
  
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
