import axios from 'axios';
import formatData from '../helpers/formatData';

export default async function getUserOrders(route, token) {
  const URL = `http://localhost:3001/${route}/orders`;
  try {
    const { data } = await axios({
      method: 'get',
      url: URL,
      headers: { authorization: token },
    });
    const formatedData = data
      .map((item) => ({ ...item, saleDate: formatData(item.saleDate) }));
    return formatedData;
  } catch (e) {
    console.log(e.message);
  }
}
