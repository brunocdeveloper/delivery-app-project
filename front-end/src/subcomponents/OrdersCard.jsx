import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

export default function OrdersCard({ pedidos }) {
  const { id, data, valor, status, address } = pedidos;
  const {
    handleRedirect,
  } = useContext(AppContext);
  return (
    <button
      type="button"
      onClick={ () => handleRedirect(`/seller/orders/${id}`) }
    >
      <div className="card">
        <p
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          { `Pedido: ${id}` }
        </p>
        <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{ status }</p>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>{ data }</p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>{ valor }</p>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>{ address }</p>
      </div>
    </button>
  );
}

// Proptypes
OrdersCard.propTypes = {
  pedidos: PropTypes.shape({
    id: PropTypes.number,
    data: PropTypes.string,
    valor: PropTypes.string,
    status: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};
