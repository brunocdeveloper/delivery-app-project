import React from 'react';
import NavBar from '../components/NavBar';
import ProductsTable from '../subcomponents/ProductsTable';

export default function Checkout() {
  const data = [{
    description: 'Brahmaaaao',
    quantity: 10,
    price: 10,
  }];

  const section1 = {
    name: 'PRODUTOS',
  };

  const section2 = {
    name: 'MEUS PEDIDOS',
  };

  return (
    <section className="checkout">
      <NavBar
        section1={ section1 }
        section2={ section2 }
      />
      <ProductsTable data={ data } />
    </section>
  );
}
