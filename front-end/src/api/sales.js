const axios = require('axios').default;

const url = 'http://localhost:3001';

export async function getAllSales() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${url}/sales`,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getByIdUser() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${url}/sales/${id}`,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
