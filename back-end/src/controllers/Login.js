const md5 = require('md5');
const Service = require('../services/Login');

const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const encryptedPwd = md5(password);
    const userInfoWithToken = await Service.authLogin(email, encryptedPwd);
    return res.status(201).json(userInfoWithToken);
  } catch (e) {
    console.error(e.message);
    return res.status(404).json(e);
  }
};

module.exports = {
  authLogin,
};
