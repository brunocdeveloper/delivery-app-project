import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function CardOrder({ order }) {
  const { id, status, sale_date: saleDate, total_price: totalPrice } = order;

  const modifyDate = moment(saleDate).format('DD/MM/YYYY');

  return (
    <main>
      <section>
        <h3
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          { `Pedido ${id}` }
        </h3>      
      </section>
      <section>
        <h3
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          { status }
        </h3>
      </section>
      <section>
        <span
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          { modifyDate }
        </span>
        <span
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          { changePriceToComa(totalPrice) }
        </span>
      </section>
    </main>
  );
}

CardOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    total_price: PropTypes.number.isRequired,
  })
}
