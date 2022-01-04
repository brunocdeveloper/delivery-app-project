const { Op } = require('sequelize');
const { Users } = require('../database/models');
// const helpers = require('../helpers');

const registerValidations = async (req, res, next) => {
  const { name, email } = req.body;

  const doesUserExist = await Users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  if (doesUserExist) return res.status(409).json('Conflict');

  next();
};

module.exports = {
  registerValidations,
};