import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import getAllProducts from '../api/products';
import NavBar from '../components/NavBar';
import ListProducts from '../components/ListProducts';

export default function Products() {
  const { products, setProducts } = useContext(AppContext);

  const section1 = {
    name: 'PRODUTOS',
  };

  const section2 = {
    name: 'MEUS PEDIDOS',
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
      <NavBar section1={ section1 } section2={ section2 } currentUser="Junior" />
      <ListProducts products={ products } />
    </>
  );
}
