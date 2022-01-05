import React from 'react';
import NavBar from '../components/NavBar';

export default function Products() {
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

  return (
    <>
      <NavBar section1={ section1 } section2={ section2 } currentUser="Junior" />
      <span> PÁGINA DE PRODUTOS </span>
    </>

  );
}
