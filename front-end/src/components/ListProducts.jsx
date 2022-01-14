import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';
import AppContext from '../context/AppContext';
import '../styles/components/products/listProduct.css';

export default function ListProducts({ products }) {
  const {
    subTotal,
    redirectTo,
    setRedirectTo,
  } = useContext(AppContext);

  useEffect(() => {
    console.log('');
    return () => {
      setRedirectTo({ pathName: '/customer/checkout', shouldRedirect: false });
    };
  }, []);

  const productsRefactor = products.map((product) => ({
    ...product, quantity: 0,
  }));

  const enableButton = () => {
    if (subTotal <= 0) return true;
    return false;
  };

  const handleRedirect = () => {
    setRedirectTo({ pathName: '/customer/checkout', shouldRedirect: true });
  };

  if (redirectTo.shouldRedirect) {
    return <Redirect to={ redirectTo.pathName } />;
  }

  return (
    <main className="list-product-container">
      { products && productsRefactor.map((product, index) => (
        <div key={ index }>
          <CardProduct product={ product } />
        </div>
      )) }
      <section className="btn-box-cart">
        <button
          className="btn-cart"
          disabled={ enableButton() }
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => handleRedirect() }
        >
          Ver Carrinho: R$
          <span
            className="span-btn-price"
            data-testid="customer_products__checkout-bottom-value"
          >
            {subTotal && subTotal.toFixed(2).replace('.', ',')}
          </span>
        </button>
      </section>
    </main>
  );
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url_image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
