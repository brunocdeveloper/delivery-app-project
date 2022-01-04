const helpers = require('../helpers');

const registerValidations = async (req, res, next) => {
  const { password, name, email } = req.body;

  const isPwdValid = await helpers.validatePwd(password);
  if (!isPwdValid) return res.status(400).json({ message: 'PWD RUIM' });
  const isNameValid = await helpers.validateName(name);
  if (!isNameValid) return res.status(400).json({ message: 'NAME RUIM' });
  const isEmailValid = await helpers.validateEmail(email);
  if (!isEmailValid) return res.status(400).json({ message: 'EMAIL RUIM' });
  
  next();
};

module.exports = {
  registerValidations,
};