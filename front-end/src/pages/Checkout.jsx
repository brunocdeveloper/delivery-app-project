import React from 'react';
import NavBar from '../components/NavBar';
import ProductsTable from '../subcomponents/ProductsTable';

export default function Checkout() {
  const data = [{
    description: 'Brahmaaaao',
    quantity: 10,
    price: 10,
  }];

  return (
    <section className="checkout">
      <NavBar />
      <ProductsTable data={ data } />
    </section>
  );
}
