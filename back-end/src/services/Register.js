const md5 = require('md5');
const { users } = require('../database/models');

const registerUser = async (payload) => {
  const { name, email, password } = payload;
  const encryptedPwd = md5(password);
  const result = await users.create(
    { name, email, password: encryptedPwd, role: 'customer' },
  );
  if (!result) throw new Error('Service unavailable. Try again later.');
};

module.exports = {
  registerUser,
};
