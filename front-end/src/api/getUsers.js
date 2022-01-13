const axios = require('axios').default;

export default async function getUsers() {
  const url = 'http://localhost:3001';
  try {
    const { data } = await axios({
      method: 'get',
      url: `${url}/admin/users`,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
