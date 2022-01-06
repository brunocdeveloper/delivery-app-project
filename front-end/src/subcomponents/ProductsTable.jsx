import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeliveryInfos from './DeliveryInfos';

export default function ProductsTable(props) {
  const { data } = props;
  const [products, setProducts] = useState(data);
  const [total, setTotal] = useState(0);

  const removeItem = (description) => {
    const removedItem = products.filter((product) => product.description !== description);
    setProducts(removedItem);
  };

  const calculateTotal = () => {
    const totalPrice = products
      .reduce((acc, { price, quantity }) => acc + (price * quantity), 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [products, calculateTotal]);

  const sellers = [{
    id: 1,
    name: 'Vendedora 1',
  },
  {
    id: 2,
    name: 'Vendedora 2',
  }];

  return (
    <div className="products-table">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={ product.item }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                {product.description}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                {product.quantity}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                {product.price}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                {product.price * product.quantity}
              </td>
              <button
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                onClick={ () => removeItem(product.description) }
              >
                Remover
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$
          {total}
        </span>
      </div>
      <DeliveryInfos
        sellers={ sellers }
        products={ products }
        totalPrice={ total }
      />
    </div>
  );
}

// proptypes
ProductsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })).isRequired,
};
