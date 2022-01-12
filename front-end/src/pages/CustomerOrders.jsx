import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import CustomerCardOrder from '../components/CustomerCardOrder';
import getUserOrders from '../api/getOrders';

export default function CustomerOrders() {
  const {
    orders,
    setOrders,
    redirectTo,
    setRedirectTo,
  } = useContext(AppContext);

  const getOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const result = await getUserOrders('customer', user.token);
    setOrders(result);
  };

  useEffect(() => {
    getOrders();
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
      <NavBar button1="Produtos" button2="Meus Pedidos" />
      { orders && orders
        .map((order, index) => <CustomerCardOrder key={ index } order={ order } />) }
    </section>
  );
}
