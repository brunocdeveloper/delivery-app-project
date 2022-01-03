// const Models = require('../models/Register.js');
const md5 = require('md5');

const registerUser = async (payload) => {
  const { name, email, password } = payload;
  const result = await Models.registerUser(name, email, md5(password));
}

module.exports = {
  registerUser,
};
