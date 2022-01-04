const { Users } = require('../database/models');

const verifyExistenceUser = async (email) => {
  const user = await Users.findOne({ where: { email } });
  return user;
};

module.exports = {
  verifyExistenceUser,
};
