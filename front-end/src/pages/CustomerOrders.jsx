import React, { useEffect } from 'react';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import CardOrder from '../components/CardOrder';
import { getByIdUserSale } from '../api/sales';

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
    const result = await getByIdUserSale(user.id);
    setOrders(result);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <section>
      <NavBar section1={ section1 } section2={ section2 } />
      { orders && orders
        .map((order, index) => <CardOrder key={ index } order={ order } />) }
    </section>
  );
}
