import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrderTable from '../components/OrderTable';
import getCustomerOrderDetailsByIdfrom from '../api/orderCustomer';

export default function OrderDetails() {
  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);

  const history = useHistory();
  const path = history.location.pathname;

  const getData = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const id = path.split('/').pop();

    const data = await getCustomerOrderDetailsByIdfrom(id, token);
    // const data = {};
    setOrder(data); // setta estado o Order
    console.log(data);
    // const productMock = [
    //   {
    //     name: 'cerveja',
    //     description: 'puromalte',
    //     price: '22.5',
    //     quantity: 2,
    //   },
    //   {
    //     name: 'refrigerante',
    //     description: 'zero açucar',
    //     price: '22.5',
    //     quantity: 4,
    //   }];
    const { products } = data;
    setItems(products); // setta no estado order.products
  };

  useEffect(() => {
    getData();
  }, []);

  const dataidCommon = 'customer_order_details__element-order-details-label';
  return (
    <>
      <NavBar button1="Produtos" button2="Meus Pedidos" />
      <span>Detalhe do Pedido</span>
      <span
        data-testid={ `${dataidCommon}-order-id` }
      >
        { order && `Pedido ${order.id}` }
      </span>
      <span> P.Vendedora:</span>
      <span
        data-testid={ `${dataidCommon}-seller-name` }
      >
        { order && `${order.seller.name}` }
      </span>
      <span
        data-testid={ `${dataidCommon}-order-date` }
      >
        { order && `${order.saleDate}` }
      </span>
      <span
        data-testid={ `${dataidCommon}-delivery-status` }
      >
        { order && `${order.status}` }
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
      >
        Marcar como entregue
      </button>
      <OrderTable products={ items } />
    </>
  );
}
