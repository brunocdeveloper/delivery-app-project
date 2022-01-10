import React from 'react';
import NavBar from '../components/NavBar';
import OrdersCard from '../subcomponents/OrdersCard';

export default function Orders() {
  const funcaoTeste = () => {
    console.log('TESTOU');
  };

  const section1 = {
    function1: funcaoTeste,
    nameSection1: 'PEDIDOS',
  };

  const pedidos = [
    {
      id: '1',
      data: '01/01/2021',
      valor: 'R$ 100,00',
      status: 'Pendente',
      address: 'Rua A, nº 2',
    },
    {
      id: '2',
      data: '01/01/2022',
      valor: 'R$ 200,00',
      status: 'Preparando',
      address: 'Rua A, nº 1',
    },
    {
      id: '3',
      data: '01/01/2020',
      valor: 'R$ 150,00',
      status: 'ENtregue',
      address: 'Rua A, nº 1',
    },
  ];

  return (
    <section>
      <NavBar section1={ section1 } />
      { pedidos.map((pedido) => (
        <OrdersCard
          pedidos={ pedido }
          key={ pedido.id }
        />
      )) }
    </section>
  );
}
