import React, { useEffect } from 'react';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import CardOrder from '../components/CardOrder';
import getByIdUser from '../api/sales';

export default function CustomerOrders() {
  const { orders, setOrders } = useContext(AppContext);

  const funcaoTeste = () => {
    console.log('TESTOU');
  };

  const section1 = {
    function1: funcaoTeste,
    nameSection1: 'Produtos',
  };

  const section2 = {
    function2: funcaoTeste,
    nameSection2: 'Meus Pedidos',
  };

  const getOrders = async () => {
    const result = await getByIdUser(id);
    setOrders(result);
  };

  useEffect(() => {
    getOrders();
  }, []);


  return (
    <section>
      <NavBar section1={ section1 } section2={ section2 } />
      { orders.length && orders
        .map((order, index) => <CardOrder key={ index } order={ order } />) }
    </section>
  )
}
