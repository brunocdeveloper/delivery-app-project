const { users } = require('../database/models');

const verifyExistenceUser = async (email) => {
  const user = await users.findOne({ where: { email } });
  return user;
};

module.exports = {
  verifyExistenceUser,
};
