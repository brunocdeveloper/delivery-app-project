import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';
import AppContext from '../context/AppContext';
import '../styles/components/listProduct.css';

export default function ListProducts({ products }) {
  const { subTotal, handleRedirect } = useContext(AppContext);
  const productsRefactor = products.map((product) => ({
    ...product, quantity: 0,
  }));

  const enableButton = () => {
    if (subTotal <= 0) return true;
    return false;
  };

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
          onClick={ () => handleRedirect('/customer/checkout') }
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
