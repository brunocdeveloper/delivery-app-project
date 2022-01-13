const axios = require('axios').default;

export default async function deleteUserById(id) {
  const url = 'http://localhost:3001';
  const body = { id };
  try {
    const { data } = await axios({
      method: 'delete',
      url: `${url}/admin/users`,
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
