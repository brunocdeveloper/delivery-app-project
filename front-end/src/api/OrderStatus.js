const axios = require('axios').default;

export default async function updateStatusOrder(id, status) {
  const body = {
    status,
  };
  try {
    const { data } = await axios({
      method: 'post',
      url: `http://localhost:3001/orders/${id}`,
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
