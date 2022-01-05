import React, { useState, useEffect } from 'react';
import getAllProducts from '../api/products';
import NavBar from '../components/NavBar';
import ListProducts from '../components/ListProducts';

export default function Products() {
  const [products, setProducts] = useState([]);

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

  const fecthProducts = () => {
    const result = getAllProducts();
    setProducts(result);
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  return (
    <>
      <h3>Produtos</h3>
      <NavBar section1={ section1 } section2={ section2 } currentUser="Junior" />
      <ListProducts products={ products } />
    </>
  );
}
