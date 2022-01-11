import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function CustomerCardOrder({ order }) {
  const { id, status, saleDate, totalPrice } = order;

  const modifyDate = moment(saleDate).format('DD/MM/YYYY');

  const changePriceToComa = (value) => value.toString().replace(/\./, ',');

  return (
    <main>
      <Link to={ `/customer/orders/${id}` }>
        <h3
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          { `Pedido ${id}` }
        </h3>
        <section>
          <h3
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            {status}
          </h3>
        </section>
        <section>
          <span
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            {modifyDate}
            {' '}
          </span>
          <span
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            {changePriceToComa(totalPrice)}
          </span>
        </section>
      </Link>
    </main>
  );
}

CustomerCardOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};
