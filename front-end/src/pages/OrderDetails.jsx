import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import OrderTable from '../components/OrderTable';
import getCustomerOrderDetailsByIdfrom from '../api/orderCustomer';

export default function OrderDetails() {
  const [order, setOrder] = useState(null);
  const [products, setProducts] = useState([]);

  const {
    handleRedirect,
  } = useContext(AppContext);

  const history = useHistory();
  const path = history.location.pathname;

  const redirectProducts = () => {
    handleRedirect('/customer/products');
  };

  const redirectOrders = () => {
    handleRedirect('/customer/orders');
  };

  const section1 = {
    function1: redirectProducts,
    name: 'Produtos',
  };

  const section2 = {
    function2: redirectOrders,
    name: 'Meus Pedidos',
  };

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
    const { product } = data;
    setProducts(product); // setta no estado order.products
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
        { order && `Pedido ${order.id}`}
      </span>
      <span> P.Vendedora:</span>
      <span
        data-testid={ `${dataidCommon}-selles-name` }
      >
        { order && `${order.seller.name}`}
      </span>
      <span
        data-testid={ `${dataidCommon}-order-date` }
      >
        {order && `${order.saleDate}`}
      </span>
      <span
        data-testid={ `${dataidCommon}-delivery-status` }
      >
        {order && `${order.status}`}
      </span>
      <button type="button"> Marcar como entregue</button>
      <OrderTable products={ products } />
    </>
  );
}
