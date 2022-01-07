import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import getAllProducts from '../api/products';
import NavBar from '../components/NavBar';
import ListProducts from '../components/ListProducts';

export default function Products() {
  const { products, setProducts, handleRedirect } = useContext(AppContext);

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

  const fecthProducts = async () => {
    const result = await getAllProducts();
    setProducts(result);
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  return (
    <>
      <h3>Produtos</h3>
      <NavBar section1={ section1 } section2={ section2 } />
      <ListProducts products={ products } />
    </>
  );
}
