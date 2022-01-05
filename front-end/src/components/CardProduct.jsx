import React from 'react';
import PropTypes from 'prop-types';

export default function CardProduct(props) {
  const { product: { id, name, price, url_image: urlImage } } = props;

  const changePriceToComa = (value) => value.toString().replace(/\./, ',');

  return (
    <main id={ id }>
      <section>
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { changePriceToComa(price) }
        </span>
        <img
          src={ urlImage }
          alt={ `${name}` }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </section>
      <footer>
        <span
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </span>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          -
        </button>
        <span
          data-testid={ `customer_products__input-card-quantity-${id}` }
        >
          0
        </span>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </footer>
    </main>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};
