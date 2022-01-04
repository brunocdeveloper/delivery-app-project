const Service = require('../services/Login');
const md5 = require('md5');

const verifyExistenceUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await Service.verifyExistenceUser(email);
  if (!user) return res.status(404).json('Not found');
  next();
};

const authLogin = async (req, res) => {
  const { email, password } = req.body;
  const encryptedPwd = md5(password);
  const user = await Service.authLogin(email, password);
  if (user.password === encryptedPwd) return res.status(200).json('Ok');
  return res.status(404).json('Not found');
};

module.exports = {
  verifyExistenceUser,
  authLogin,
};
