import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import OrderTable from '../components/OrderTable';
import getCustomerOrderDetailsByIdfrom from '../api/orderCustomer';
import formatValue from '../helpers/formatValues';

export default function OrderDetails() {
  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);

  const {
    redirectTo,
    setRedirectTo,
  } = useContext(AppContext);

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

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('');
    return () => {
      setRedirectTo({ ...redirectTo, shouldRedirect: false });
    };
  }, []);

  if (redirectTo.shouldRedirect) {
    return <Redirect to={ redirectTo.pathName } />;
  }

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
        disabled
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
