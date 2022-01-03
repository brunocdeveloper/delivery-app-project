const { Users } = require('../database/models');
const md5 = require('md5');

const registerUser = async (payload) => {
  const { name, email, password } = payload;
  const encryptedPwd = md5(password);
  const result = await Users.create({ name, email, password: encryptedPwd, role: 'client' })
  if (!result) throw new Error('Service unavailable. Try again later.')
}

module.exports = {
  registerUser,
};
