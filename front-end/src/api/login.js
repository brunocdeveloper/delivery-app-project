const axios = require('axios').default;

export default async function handleLogin(payload) {
  const body = {
    email: payload.email,
    password: payload.password,
  };
  try {
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3001/login',
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
