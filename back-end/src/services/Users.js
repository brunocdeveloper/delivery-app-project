const { users } = require('../database/models');

const getUsersByRole = async (userRole) => {
  const foundUsers = await users.findAll({ where: { role: userRole } });
  if (!foundUsers) throw new Error('Incorrect Role. Try again.');
  return foundUsers;
};

module.exports = {
  getUsersByRole,
};
