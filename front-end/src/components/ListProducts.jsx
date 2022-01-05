import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

export default function ListProducts({ products }) {
  return (
    <section>
      { products && products.map((product, index) => (
        <div key={ index }>
          <CardProduct product={ product } />
        </div>
      )) }
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
