import React from 'react';
import NavBar from '../components/NavBar';
import ProductsTable from '../subcomponents/ProductsTable';

export default function Checkout() {
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
      <ProductsTable />
    </section>
  );
}
