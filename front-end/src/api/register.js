const axios = require('axios').default;

export default async function registerUser(payload, token) {
  const body = {
    name: payload.rgName,
    password: payload.rgPwd,
    email: payload.rgEmail,
    role: payload.rgRole,
  };
  try {
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3001/register',
      headers: { authorization: token },
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
