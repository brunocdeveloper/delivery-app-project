import formatData from '../helpers/formatData';

const axios = require('axios').default;

export default async function getCustomerOrderDetailsById(id, token) {
  try {
    const { data } = await axios({
      method: 'get',
      url: `http://localhost:3001/customer/orders/${id}`,
      headers: { authorization: token },
    });
    const formatedData = formatData(data.saleDate);
    return { ...data, saleDate: formatedData };
  } catch (e) {
    console.log(e.message);
  }
}
