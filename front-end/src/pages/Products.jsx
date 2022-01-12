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
    doesRedirect,
    setDoesRedirect,
    pathName,
    setPathName,
  } = useContext(AppContext);

  const redirectProducts = () => {
    console.log('CLICOU NO PRODUTO');
    setPathName('/customer/products');
    setDoesRedirect(true);
  };

  const redirectOrders = () => {
    console.log('CLICOU NO ORDER');
    setPathName('/customer/orders');
    setDoesRedirect(true);
  };

  const section1 = {
    function1: redirectProducts,
    name: 'Produtos',
  };

  const section2 = {
    function2: redirectOrders,
    name: 'Meus Pedidos',
  };

  const fecthProducts = async () => {
    const result = await getAllProducts();
    setProducts(result);
  };

  useEffect(() => {
    // setDoesRedirect(false);
    fecthProducts();
    return () => {
      setDoesRedirect(false);
    };
  }, [doesRedirect, pathName]);

  if (doesRedirect) {
    console.log(pathName, 'PATHNAME');
    return <Redirect to={ pathName } />;
  }

  return (
    <>
      <NavBar section1={ section1 } section2={ section2 } />
      <h3>Produtos</h3>
      <ListProducts products={ products } />
    </>
  );
}
