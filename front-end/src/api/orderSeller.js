import { formatData } from '../helpers/formatData';

export default async function getSellerOrderDetailsById(id, token) {  
  try {
    const { data } = await axios({
      method: 'get',
      url: `http://localhost:3001/seller/orders/${id}`,
      headers: { authorization: token },
    });
    const formatedData = formatData(data.saleDate);

    return { ...data, saleDate: formatedData };
  } catch (e) {
    console.log(e.message);
  }
}
