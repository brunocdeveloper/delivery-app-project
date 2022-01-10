const axios = require('axios').default;

export default async function getUsersByRole(token, payload) {
  const url = 'http://localhost:3001';
  const body = {
    role: payload.role,
  };
  try {
    const { data } = await axios({
      method: 'post',
      url: `${url}/customer/checkout/get-users`,
      headers: { authorization: token },
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
