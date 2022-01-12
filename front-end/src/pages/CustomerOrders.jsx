import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import CustomerCardOrder from '../components/CustomerCardOrder';
import getUserOrders from '../api/getOrders';

export default function CustomerOrders() {
  const { orders, setOrders, handleRedirect } = useContext(AppContext);

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

  const getOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user, 'USER');
    const result = await getUserOrders('customer', user.token);
    // console.log(result, 'RESULT');
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
