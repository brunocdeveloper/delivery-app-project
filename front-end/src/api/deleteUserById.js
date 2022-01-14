const axios = require('axios').default;

export default async function deleteUserById(id, token) {
  const url = 'http://localhost:3001';
  const body = { id };
  try {
    const { data } = await axios({
      method: 'delete',
      url: `${url}/admin/users`,
      data: body,
      headers: { authorization: token },
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
