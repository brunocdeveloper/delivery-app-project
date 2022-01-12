import React from 'react';
import NavBar from '../components/NavBar';
import ProductsTable from '../subcomponents/ProductsTable';

export default function Checkout() {
  return (
    <section className="checkout">
      <NavBar button1="Produtos" button2="Meus Pedidos" />
      <ProductsTable />
    </section>
  );
}
