import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import getAllProducts from '../api/products';
import NavBar from '../components/NavBar';
import ListProducts from '../components/ListProducts';

export default function Products() {
  const {
    products,
    setProducts,
    redirectTo,
    setRedirectTo,
  } = useContext(AppContext);

  const fecthProducts = async () => {
    const result = await getAllProducts();
    setProducts(result);
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  useEffect(() => {
    console.log('');
    return () => {
      setRedirectTo({ ...redirectTo, shouldRedirect: false });
    };
  }, []);

  if (redirectTo.shouldRedirect) {
    return <Redirect to={ redirectTo.pathName } />;
  }

  return (
    <>
      <NavBar button1="Produtos" button2="Meus Pedidos" />
      <h3>Produtos</h3>
      <ListProducts products={ products } />
    </>
  );
}
