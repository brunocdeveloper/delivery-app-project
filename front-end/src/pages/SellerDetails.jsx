import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import SellerTable from '../components/SellerTable';
import getCustomerOrderDetailsByIdfrom from '../api/orderCustomer';
import formatValue from '../helpers/formatValues';

export default function SellerDetails() {
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

  const dataidCommon = 'seller_order_details__element-order-details-label';
  return (
    <>
      <NavBar button2="Pedidos" />
      <span> Detalhe do Pedido</span>
      <span
        data-testid={ `${dataidCommon}-order-id` }
      >
        { order && `Pedido ${order.id}` }
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
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        // disabled
      >
        Preparar Pedido
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled
      >
        Saiu para entrega
      </button>
      <SellerTable products={ items } />
      <span
        data-testid="seller_order_details__element-order-total-price"
      >
        { order && formatValue(order.totalPrice) }
      </span>
    </>
  );
}
