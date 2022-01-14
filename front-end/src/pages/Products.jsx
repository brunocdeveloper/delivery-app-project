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
<<<<<<< HEAD
      <NavBar section1={ section1 } section2={ section2 } />
=======
      <NavBar button1="Produtos" button2="Meus Pedidos" />
      <h3>Produtos</h3>
>>>>>>> 88f68f9e952a8564822a547a2bbeebda0184f4b4
      <ListProducts products={ products } />
    </>
  );
}
