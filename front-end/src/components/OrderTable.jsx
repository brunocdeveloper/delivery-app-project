import React from 'react';
import PropTypes from 'prop-types';
import { TableItems,
  ItemId,
  ItemName,
  ItemQty,
  ItemPrice,
  ItemTotalPrice,
  ThItems,
  ThDescription,
  ThQty,
  ThPrice,
  ThTotalPrice } from '../styles/components/orderTable/style';

export default function OrderTable(props) {
  const { products } = props;
  const calcTotal = ({ quantity }, price) => (quantity * price)
    .toFixed(2).replace('.', ',');

  const dataidCommon = 'customer_order_details__element-order';
  return (
    <table>
      <thead>
        <tr>
          <ThItems>Item</ThItems>
          <ThDescription>Descrição</ThDescription>
          <ThQty>Quantidade</ThQty>
          <ThPrice>Valor Unitário</ThPrice>
          <ThTotalPrice>Sub-total</ThTotalPrice>
        </tr>
      </thead>
      <tbody>
        { products && products.map((p, i) => (
          <TableItems key={ p.name }>
            <ItemId
              data-testid={ `${dataidCommon}-table-item-number-${i}` }
            >
              {p.id}
            </ItemId>
            <ItemName
              data-testid={ `${dataidCommon}-table-name-${i}` }
            >
              {p.name}
            </ItemName>
            <ItemQty data-testid={ `${dataidCommon}-table-quantity-${i}` }>
              {p.salesProducts.quantity}
            </ItemQty>
            <ItemPrice data-testid={ `${dataidCommon}-table-sub-total-${i}` }>
              {p.price}
            </ItemPrice>
            <ItemTotalPrice data-testid={ `${dataidCommon}-total-price-${i}` }>
              {calcTotal(p.salesProducts, p.price)}
            </ItemTotalPrice>
          </TableItems>
        ))}
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
