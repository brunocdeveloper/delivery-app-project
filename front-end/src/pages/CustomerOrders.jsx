import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import CustomerCardOrder from '../components/CustomerCardOrder';
import getUserOrders from '../api/getOrders';

export default function CustomerOrders() {
  const { orders, setOrders } = useContext(AppContext);

  const section1 = {
    name: 'PRODUTOS',
  };

  const section2 = {
    name: 'MEUS PEDIDOS',
  };

  const getOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user, 'USER');
    const result = await getUserOrders('customer', user.token);
    console.log(result, 'RESULT');
    setOrders(result);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <section>
      <NavBar section1={ section1 } section2={ section2 } />
      { orders && orders
        .map((order, index) => <CustomerCardOrder key={ index } order={ order } />) }
    </section>
  );
}
