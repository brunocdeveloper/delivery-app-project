const axios = require('axios').default;

const url = 'http://localhost:3001';

export async function getAllSales() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${url}/customer/orders`,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getByIdUserSale() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${url}/customer/orders/${id}`,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
