const axios = require('axios').default;

export default async function getAllProducts() {
  const url = 'http://localhost:3001';
  try {
    const { data } = await axios({
      method: 'get',
      url: `${url}/customer/products`,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
