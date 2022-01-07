import React, { useState, useEffect, useContext } from 'react';
import DeliveryInfos from './DeliveryInfos';
import AppContext from '../context/AppContext';

export default function ProductsTable() {
  const { cartItens, setCartItens } = useContext(AppContext);
  const [total, setTotal] = useState(0);

  const removeItem = (name) => {
    const removedItem = cartItens.filter((product) => product.name !== name);
    setCartItens(removedItem);
  };

  const calculateTotal = () => {
    const totalPrice = cartItens
      .reduce((acc, { price, quantity }) => acc + (price * quantity), 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItens, calculateTotal]);

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
          {cartItens.map((product, i) => (
            <tr key={ product.item }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                {product.name}
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
                onClick={ () => removeItem(product.name) }
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
        cartItens={ cartItens }
        totalPrice={ total }
      />
    </div>
  );
}
