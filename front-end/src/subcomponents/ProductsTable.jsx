import React, { useState, useEffect, useContext } from 'react';
import DeliveryInfos from './DeliveryInfos';
import AppContext from '../context/AppContext';
import { ContainerOrdersCheckout,
  ContainerTableOrder,
  ContainerTbody,
  ItemBtnRemove,
  ItemDescription,
  ItemPriceUnity,
  ItemQty,
  ItemSubTotal,
  ItemTd,
  ItemTotalPrice,
  TableDescription,
  TableItem,
  TableQty,
  TableRemove,
  TableRow,
  TableSubTotal,
  TableTr,
  TableUnityPrice,
  TitleCheckout } from '../styles/components/customerCheckout/style';

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

  return (
    <ContainerOrdersCheckout className="products-table">
      <TitleCheckout>Finalizar Pedido</TitleCheckout>
      <ContainerTableOrder>
        <table>
          <TableRow>
            <TableItem>Item</TableItem>
            <TableDescription>Descrição</TableDescription>
            <TableQty>Quantidade</TableQty>
            <TableUnityPrice>Valor Unitário</TableUnityPrice>
            <TableSubTotal>Sub-total</TableSubTotal>
            <TableRemove>Remover Item</TableRemove>
          </TableRow>
          <ContainerTbody>
            <tbody>
              {cartItens.map((product, i) => (
                <TableTr key={ product.item }>
                  <ItemTd
                    data-testid={
                      `customer_checkout__element-order-table-item-number-${i}`
                    }
                  >
                    {i + 1}
                  </ItemTd>
                  <ItemDescription
                    data-testid={ `customer_checkout__element-order-table-name-${i}` }
                  >
                    {product.name}
                  </ItemDescription>
                  <ItemQty
                    data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
                  >
                    {product.quantity}
                  </ItemQty>
                  <ItemPriceUnity
                    data-testid={
                      `customer_checkout__element-order-table-unit-price-${i}`
                    }
                  >
                    {product.price.replace('.', ',')}
                  </ItemPriceUnity>
                  <ItemSubTotal
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${i}`
                    }
                  >
                    {(product.price * product.quantity).toFixed(2).replace('.', ',')}
                  </ItemSubTotal>
                  <ItemBtnRemove
                    type="button"
                    data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                    onClick={ () => removeItem(product.name) }
                  >
                    Remover
                  </ItemBtnRemove>
                </TableTr>
              ))}
            </tbody>
            <ItemTotalPrice
              data-testid="customer_checkout__element-order-total-price"
            >
              Total: R$
              {total.toFixed(2).replace('.', ',')}
            </ItemTotalPrice>
          </ContainerTbody>
        </table>
      </ContainerTableOrder>
      <DeliveryInfos
        cartItens={ cartItens }
        totalPrice={ total }
      />
    </ContainerOrdersCheckout>
  );
}
