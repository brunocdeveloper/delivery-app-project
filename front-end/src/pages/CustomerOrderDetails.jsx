import React from 'react';
import NavBar from '../components/NavBar';

export default function CustomerOrderDetails() {
  const section1 = {
    name: 'PRODUTOS',
  };

  const section2 = {
    name: 'MEUS PEDIDOS',
  };

  return (
    <div>
      <NavBar section1={ section1 } section2={ section2 } />
      <h2>Detalhes do pedido</h2>
    </div>
  );
}
