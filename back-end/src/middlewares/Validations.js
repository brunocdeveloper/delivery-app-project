const { Op } = require('sequelize');
const { users } = require('../database/models');

const registerValidations = async (req, res, next) => {
  const { name, email } = req.body;

  const doesUserExist = await users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  if (doesUserExist) return res.status(409).json('Conflict');

  next();
};

module.exports = {
  registerValidations,
};