import axios from 'axios';
import formatData from '../helpers/formatData';
import changePriceToComa from '../helpers/formatValues';

export default async function getUserOrders(route, token) {
  const URL = `http://localhost:3001/${route}/orders`;
  try {
    const { data } = await axios({
      method: 'get',
      url: URL,
      headers: { authorization: token },
    });
    const formatedData = data
      .map((item) => (
        {
          ...item,
          saleDate: formatData(item.saleDate),
          totalPrice: changePriceToComa(item.totalPrice),
        }));
    return formatedData;
  } catch (e) {
    console.log(e.message);
  }
}
