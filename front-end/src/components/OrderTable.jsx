import React from 'react';
import PropTypes from 'prop-types';

export default function OrderTable(props) {
  const { products } = props;
  const calcSubtotal = ({ quantity, price }) => (quantity * price)
    .toFixed(2).replace('.', ',');

  const dataidCommon = 'customer_order_details__element-order';
  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </tr>
      { products && products.map((prod, i) => (
        <tr key={ prod.name }>
          <td data-testid={ `${dataidCommon}-table-item-number-${i}` }>{i}</td>
          <td data-testid={ `${dataidCommon}--table-name${i}` }>{prod.description}</td>
          <td data-testid={ `${dataidCommon}-table-quantity-${i}` }>{prod.quantity}</td>
          <td data-testid={ `${dataidCommon}-table-sub-total-${i}` }>{prod.value}</td>
          <td data-testid={ `${dataidCommon}-total-price-${i}` }>{calcSubtotal(prod)}</td>
        </tr>
      ))}
    </table>
  );
}

OrderTable.propTypes = {
  products: PropTypes.objectOf.isRequired,
};
