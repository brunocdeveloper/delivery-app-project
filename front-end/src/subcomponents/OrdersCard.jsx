import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SellerAdress, SellerCards,
  SellerDateAndPrice,
  SellerOrderDate,
  SellerOrderId,
  SellerOrderPrice,
  SellerOrderStatus,
  SellerTitleId,
  SellerTitleStatus } from '../styles/components/sellerOrders/style';

export default function OrdersCard({ pedidos }) {
  const { id, saleDate, totalPrice, status, deliveryAddress, deliveryNumber } = pedidos;
  return (
    <Link
      to={ `/seller/orders/${id}` }
    >
      <SellerCards>
        <SellerOrderId>
          <SellerTitleId
            data-testid={ `seller_orders__element-order-id-${id}` }
          >
            { `Pedido: ${id}` }
          </SellerTitleId>
        </SellerOrderId>
        <SellerOrderStatus>
          <SellerTitleStatus
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            { status }
          </SellerTitleStatus>
        </SellerOrderStatus>
        <SellerDateAndPrice>
          <SellerOrderDate
            data-testid={ `seller_orders__element-order-date-${id}` }
          >
            { saleDate }
          </SellerOrderDate>
          <SellerOrderPrice
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            { `R$: ${totalPrice}` }
          </SellerOrderPrice>
          <SellerAdress
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            { `${deliveryAddress} - ${deliveryNumber}` }
          </SellerAdress>
        </SellerDateAndPrice>
      </SellerCards>
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
