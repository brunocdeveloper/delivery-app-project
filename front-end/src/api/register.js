const axios = require('axios').default;

export default async function registerUser(payload) {
  const body = {
    name: payload.rgName,
    password: payload.rgPwd,
    email: payload.rgEmail,
  };
  try {
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3001/register',
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
