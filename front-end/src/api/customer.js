const axios = require('axios').default;

export default async function createSale(token, payload) {
  const body = {
    sellerId: payload.sellerId,
    deliveryAddress: payload.deliveryAddress,
    deliveryNumber: payload.deliveryNumber,
    prodArray: payload.prodArray,
    totalPrice: payload.totalPrice,
  };
  try {
    const { data: { saleId } } = await axios({
      method: 'post',
      url: 'http://localhost:3001/customer/checkout',
      headers: { authorization: token },
      data: body,
    });
    return saleId;
  } catch (e) {
    console.log(e.message);
  }
}
