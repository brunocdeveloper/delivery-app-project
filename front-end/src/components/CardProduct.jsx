import React from 'react';
import PropTypes from 'prop-types';

export default function CardProduct(props) {
  const { product: { name, price, url_image: urlImage } } = props;

  return (
    <>
      <section>
        <span>{ price }</span>
        <img
          src={ urlImage }
          alt={ name }
        />
      </section>
      <footer>
        <span>{ name }</span>
        <button type="button">-</button>
        <span>0</span>
        <button type="button">+</button>
      </footer>
    </>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};
