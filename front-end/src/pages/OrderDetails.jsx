import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import OrderTable from '../components/OrderTable';

export default function OrderDetails() {
  const [order, setOrder] = useState(null);
  const [products, setProducts] = useState(null);

  const {
    handleRedirect,
  } = useContext(AppContext);

  const redirectProducts = () => {
    handleRedirect('/customer/products');
  };

  const redirectOrders = () => {
    handleRedirect('/customer/orders');
  };

  const section1 = {
    function1: redirectProducts,
    nameSection1: 'TESTE',
  };

  const section2 = {
    function2: redirectOrders,
    nameSection2: 'Meus Pedidos',
  };

  const getData = () => {
    const data = null;
    console.log('AXIOS - GET orders/:id');
    setOrder(data);
    setProducts(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const dataidCommon = 'customer_order_details__element-order-details-label';
  return (
    <>
      <NavBar section1={ section1 } section2={ section2 } />
      <span>Detalhe do Pedido</span>
      <span
        data-testid={ `${dataidCommon}-order-id` }
      >
        { `Pedido ${order.id}`}
      </span>
      <span> P.Vendedora:</span>
      <span
        data-testid={ `${dataidCommon}-selles-name` }
      >
        { `${order.seller}`}
      </span>
      <span
        data-testid={ `${dataidCommon}-order-date` }
      >
        { `${order.date}`}
      </span>
      <span
        data-testid={ `${dataidCommon}-delivery-status` }
      >
        { `${order.status}`}
      </span>
      <button type="button"> Marcar como entregue</button>
      <OrderTable products={ products } />
    </>
  );
}
