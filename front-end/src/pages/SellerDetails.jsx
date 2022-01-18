import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import SellerTable from '../components/SellerTable';
import getCustomerOrderDetailsByIdfrom from '../api/orderCustomer';
import formatValue from '../helpers/formatValues';
import updateStatusOrder from '../api/OrderStatus';
import { ButtonToPrepare, ContainerSellerInformation,
  ContainerSellerOrderDetails,
  ContainerSellerOrdersItems,
  SellerOrderId,
  SellerOrderStatus,
  SellerSaleDate,
  SellerTotalPrice,
  TitleSellerDetail } from '../styles/components/sellerOrderDetails/style';
import { ButtonDelivered } from '../styles/components/orderDetails/style';

export default function SellerDetails() {
  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);

  const {
    redirectTo,
    setRedirectTo,
  } = useContext(AppContext);

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

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('');
    return () => {
      setRedirectTo({ ...redirectTo, shouldRedirect: false });
    };
  }, []);

  // useEffect(() => getData(), [order]);

  if (redirectTo.shouldRedirect) {
    return <Redirect to={ redirectTo.pathName } />;
  }

  const updateStatus = async (status) => {
    const id = path.split('/').pop();
    await updateStatusOrder(id, status);
    getData();
  };

  const emTransito = 'Em Trânsito';

  const enableBtnPrepare = () => {
    if (order.status === 'Preparando'
      || order.status === emTransito
      || order.status === 'Entregue') {
      return true;
    }
    return false;
  };

  const enableBtnForDelivery = () => {
    if (order.status === 'Pendente'
      || order.status === 'Entregue'
      || order.status === emTransito) {
      return true;
    }
    return false;
  };

  const dataidCommon = 'seller_order_details__element-order-details-label';
  return (
    <>
      <NavBar button2="Pedidos" />
      <ContainerSellerOrderDetails>
        <TitleSellerDetail> Detalhe do Pedido</TitleSellerDetail>
        <ContainerSellerInformation>
          <div>
            <SellerOrderId
              data-testid={ `${dataidCommon}-order-id` }
            >
              { order && `Pedido ${order.id}` }
            </SellerOrderId>
            <SellerSaleDate
              data-testid={ `${dataidCommon}-order-date` }
            >
              { order && `${order.saleDate}` }
            </SellerSaleDate>
          </div>
          <div>
            <SellerOrderStatus
              data-testid={ `${dataidCommon}-delivery-status` }
            >
              { order && `${order.status}` }
            </SellerOrderStatus>
            <ButtonToPrepare
              data-testid="seller_order_details__button-preparing-check"
              type="button"
              onClick={ () => updateStatus('Preparando') }
              disabled={ order && enableBtnPrepare() }
            >
              Preparar Pedido
            </ButtonToPrepare>
            <ButtonDelivered
              data-testid="seller_order_details__button-dispatch-check"
              type="button"
              onClick={ () => updateStatus('Em Trânsito') }
              disabled={ order && enableBtnForDelivery() }
            >
              Saiu para entrega
            </ButtonDelivered>
          </div>
        </ContainerSellerInformation>
        <ContainerSellerOrdersItems>
          <SellerTable products={ items } />
          <SellerTotalPrice
            data-testid="seller_order_details__element-order-total-price"
          >
            { order && formatValue(order.totalPrice) }
          </SellerTotalPrice>
        </ContainerSellerOrdersItems>
      </ContainerSellerOrderDetails>
    </>
  );
}
