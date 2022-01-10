import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import ProductsTable from '../subcomponents/ProductsTable';

export default function Checkout() {
  const {
    handleRedirect,
  } = useContext(AppContext);

  const redirectProducts = () => {
    handleRedirect('/customer/products');
  };

  const redirectOrders = () => {
    handleRedirect('/customer/orders');
  };

  const section1 = {
    function1: redirectProducts,
    nameSection1: 'Produtos',
  };

  const section2 = {
    function2: redirectOrders,
    nameSection2: 'Meus Pedidos',
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
