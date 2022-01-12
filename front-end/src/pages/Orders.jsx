import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../components/NavBar';
import OrdersCard from '../subcomponents/OrdersCard';
import getUserOrders from '../api/getOrders';
import AppContext from '../context/AppContext';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const { handleRedirect } = useContext(AppContext);

  const redirectOrders = () => {
    handleRedirect('/customer/orders');
  };

  const handleOrders = async (token) => {
    const ordersList = await getUserOrders('seller', token);
    console.log(ordersList);
    setOrders(ordersList);
  };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    handleOrders(token);
  }, []);

  const section2 = {
    function2: redirectOrders,
    name: 'Pedidos',
  };

  return (
    <section>
      <NavBar section2={ section2 } />
      { orders && orders.map((pedido) => (
        <OrdersCard
          pedidos={ pedido }
          key={ pedido.id }
        />
      )) }
    </section>
  );
}
