const helpers = require('../helpers');

const registerValidations = async (req, res, next) => {
  const { password } = req.body;
  const isPwdValid = await helpers.validatePwd(password);
  if (!isPwdValid) return res.status(400).json({ message: 'DEU RUIM' });
  next();
}

module.exports = {
  registerValidations,
};