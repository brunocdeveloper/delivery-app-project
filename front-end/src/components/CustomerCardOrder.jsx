import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardOrder,
  DateAndPrice,
  OrderDate,
  OrderId,
  OrderPrice,
  OrderStatus,
  TitleId,
  TitleStatus } from '../styles/components/customerOrders/style';

export default function CustomerCardOrder({ order }) {
  const { id, status, saleDate, totalPrice } = order;

  const changePriceToComa = (value) => value.toString().replace(/\./, ',');

  return (
    <Link to={ `/customer/orders/${id}` }>
      <CardOrder>
        <OrderId
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          <TitleId>
            { `Pedido ${id}` }
          </TitleId>
        </OrderId>
        <OrderStatus>
          <TitleStatus
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            {status}
          </TitleStatus>
        </OrderStatus>
        <DateAndPrice>
          <OrderDate
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            {saleDate}
          </OrderDate>
          <OrderPrice
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            {`R$${changePriceToComa(totalPrice)}` }
          </OrderPrice>
        </DateAndPrice>
      </CardOrder>
    </Link>
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
