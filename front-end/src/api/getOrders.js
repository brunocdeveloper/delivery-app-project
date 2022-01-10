const axios = require('axios').default;

export default async function getUserOrders(route, token) {
  const URL = `http://localhost:3001/${route}/orders`;
  try {
    const { data } = await axios({
      method: 'get',
      url: URL,
      headers: { authorization: token },
    });

    return data;
  } catch (e) {
    console.log(e.message);
  }
}
