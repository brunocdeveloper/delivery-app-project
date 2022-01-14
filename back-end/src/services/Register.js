const md5 = require('md5');
const { users } = require('../database/models');

const registerUser = async (payload) => {
  const { name, email, password, role } = payload;

  const encryptedPwd = md5(password);

  if (!role) {
    const result = await users.create(
      { name, email, password: encryptedPwd },
    );
    if (!result) throw new Error('Service unavailable. Try again later.');
    return;
  }

  const result = await users.create(
    { name, email, password: encryptedPwd, role },
  );
  if (!result) throw new Error('Service unavailable. Try again later.');
};

module.exports = {
  registerUser,
};
