import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';
import AppContext from '../context/AppContext';

export default function ListProducts({ products }) {
  const { subTotal, handleRedirect } = useContext(AppContext);

  const productsRefactor = products.map((product) => ({
    ...product, quantity: 0,
  }));

  return (
    <section>
      { products && productsRefactor.map((product, index) => (
        <div key={ index }>
          <CardProduct product={ product } />
        </div>
      )) }
      <button
        type="button"
        data-testid="data-testid='customer_products__button-cart"
        onClick={ () => handleRedirect('/customer/checkout') }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          { subTotal && subTotal.toFixed(2).replace('.', ',') }
        </span>
      </button>
    </section>
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
