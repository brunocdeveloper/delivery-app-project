const md5 = require('md5');
const Service = require('../services/Login');

const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password, 'CONTROLLER');
    const encryptedPwd = md5(password);
    console.log(encryptedPwd, 'MD5 PWD')
    const userInfoWithToken = await Service.authLogin(email, encryptedPwd);
    return res.status(200).json(userInfoWithToken);
  } catch (e) {
    console.error(e.message);
    return res.status(404).json(e.message);
  }
};

module.exports = {
  authLogin,
};
