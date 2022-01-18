import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrderTable from '../components/OrderTable';
import getCustomerOrderDetailsByIdfrom from '../api/orderCustomer';
import formatValue from '../helpers/formatValues';
import updateStatusOrder from '../api/OrderStatus';
import { ButtonDelivered, ContainerInformation,
  ContainerOrderDetails,
  ContainerOrdersItems,
  OrderId,
  OrderStatus,
  SaleDate,
  Seller,
  SellerName,
  TitleDetail,
  TotalPrice } from '../styles/components/orderDetails/style';

export default function OrderDetails() {
  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);

  const history = useHistory();
  const path = history.location.pathname;

  const getData = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const id = path.split('/').pop();

    const data = await getCustomerOrderDetailsByIdfrom(id, token);
    setOrder(data);
    const { products } = data;
    setItems(products);
  };

  const enableBtnDelivered = () => {
    if (order && order.status === 'Em Trânsito') {
      return false;
    }
    return true;
  };

  useEffect(() => {
    getData();
  }, []);

  const updateStatus = async (status) => {
    const id = path.split('/').pop();
    await updateStatusOrder(id, status);
    getData();
  };

  const dataidCommon = 'customer_order_details__element-order-details-label';
  return (
    <>
      <NavBar button1="Produtos" button2="Meus Pedidos" />
      <ContainerOrderDetails>
        <TitleDetail>Detalhe do Pedido</TitleDetail>
        <ContainerInformation>
          <di>
            <OrderId
              data-testid={ `${dataidCommon}-order-id` }
            >
              { order && `Pedido ${order.id}` }
            </OrderId>
            <Seller> P.Vendedora:</Seller>
            <SellerName
              data-testid={ `${dataidCommon}-seller-name` }
            >
              { order && `${order.seller.name}` }
            </SellerName>
            <SaleDate
              data-testid={ `${dataidCommon}-order-date` }
            >
              { order && `${order.saleDate}` }
            </SaleDate>
          </di>
          <di>
            <OrderStatus
              data-testid={ `${dataidCommon}-delivery-status` }
            >
              { order && `${order.status}` }
            </OrderStatus>
            <ButtonDelivered
              data-testid="customer_order_details__button-delivery-check"
              type="button"
              onClick={ () => updateStatus('Entregue') }
              disabled={ order && enableBtnDelivered() }
            >
              Marcar como entregue
            </ButtonDelivered>
          </di>
        </ContainerInformation>
        <ContainerOrdersItems>
          <OrderTable products={ items } />
          <TotalPrice
            data-testid="customer_order_details__element-order-total-price"
          >
            { order && formatValue(order.totalPrice) }
          </TotalPrice>
        </ContainerOrdersItems>
      </ContainerOrderDetails>
    </>
  );
}
