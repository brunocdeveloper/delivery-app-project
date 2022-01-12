import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function OrdersCard({ pedidos }) {
  const { id, saleDate, totalPrice, status, deliveryAddress, deliveryNumber } = pedidos;
  return (
    <Link
      to={ `/seller/orders/${id}` }
    >
      <div className="card">
        <p
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          { `Pedido: ${id}` }
        </p>
        <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{ status }</p>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>{ saleDate }</p>
        <p
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          { `R$: ${totalPrice}` }
        </p>
        <p
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          { `${deliveryAddress} - ${deliveryNumber}` }
        </p>
      </div>
    </Link>
  );
}

// Proptypes
OrdersCard.propTypes = {
  pedidos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.number.isRequired,
  }).isRequired,
};
