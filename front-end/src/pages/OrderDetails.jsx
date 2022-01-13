import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrderTable from '../components/OrderTable';
import getCustomerOrderDetailsByIdfrom from '../api/orderCustomer';
import formatValue from '../helpers/formatValues';
import updateStatusOrder from '../api/OrderStatus';

export default function OrderDetails() {
  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);

  const history = useHistory();
  const path = history.location.pathname;

  const getData = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const id = path.split('/').pop();

    const data = await getCustomerOrderDetailsByIdfrom(id, token);
    setOrder(data);
    const { products } = data;
    setItems(products);
  };

  const enableBtnDelivered = () => {
    if (order && order.status === 'Em Trânsito') {
      return false;
    }
    return true;
  };

  useEffect(() => {
    getData();
  }, []);

  const updateStatus = async (status) => {
    const id = path.split('/').pop();
    await updateStatusOrder(id, status);
    getData();
  };

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
        onClick={ () => updateStatus('Entregue') }
        disabled={ order && enableBtnDelivered() }
      >
        Marcar como entregue
      </button>
      <OrderTable products={ items } />
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        { order && formatValue(order.totalPrice) }
      </span>
    </>
  );
}
