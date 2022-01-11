const { users, sales } = require('../database/models');

const getUsersByRole = async (userRole) => {
  const foundUsers = await users.findAll({ where: { role: userRole } });
  if (!foundUsers) throw new Error('Incorrect Role. Try again.');
  return foundUsers;
};

const getUserOrders = async (userId, role) => {
  let foundOrders;
  if (role === 'seller') {
    foundOrders = await sales.findAll({ where: { sellerId: userId } });
  } else if (role === 'customer') {
    foundOrders = await sales.findAll({ where: { userId } });
  }
  return foundOrders;
};

module.exports = {
  getUsersByRole,
  getUserOrders,
};
