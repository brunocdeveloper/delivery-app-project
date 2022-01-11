import React from 'react';
import PropTypes from 'prop-types';

export default function OrderTable(props) {
  const { products } = props;
  const calcTotal = ({ quantity }, price) => (quantity * price)
    .toFixed(2).replace('.', ',');

  const dataidCommon = 'customer_order_details__element-order';
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        { products && products.map((p, i) => (
          <tr key={ p.name }>
            <td data-testid={ `${dataidCommon}-table-item-number-${i}` }>{p.id}</td>
            <td data-testid={ `${dataidCommon}--table-name${i}` }>{p.name}</td>
            <td data-testid={ `${dataidCommon}-table-quantity-${i}` }>
              {p.salesProducts.quantity}
            </td>
            <td data-testid={ `${dataidCommon}-table-sub-total-${i}` }>
              {p.price}
            </td>
            <td data-testid={ `${dataidCommon}-total-price-${i}` }>
              {calcTotal(p.salesProducts, p.price)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
