const axios = require('axios').default;

const registerUser = async (payload) => {
  const body = {
    name: payload.rgName,
    password: payload.rgPwd,
    email: payload.rgEmail,
  };
  try {
    await axios({
      method: 'post',
      url: 'http://localhost:3001/register',
      data: body,
    });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  registerUser,
};
