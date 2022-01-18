import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrdersCard from '../subcomponents/OrdersCard';
import getUserOrders from '../api/getOrders';
import AppContext from '../context/AppContext';
import { ContainerSellerOrders } from '../styles/components/sellerOrders/style';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { setRedirectTo, redirectTo } = useContext(AppContext);

  const handleOrders = async (token) => {
    const ordersList = await getUserOrders('seller', token);
    console.log(ordersList);
    setOrders(ordersList);
  };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    handleOrders(token);
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

  return (
    <section>
      <NavBar button2="Pedidos" />
      <ContainerSellerOrders>
        { orders && orders.map((pedido) => (
          <OrdersCard
            pedidos={ pedido }
            key={ pedido.id }
          />
        )) }
      </ContainerSellerOrders>
    </section>
  );
}
