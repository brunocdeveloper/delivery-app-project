import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';

export default function Generic() {
  const {
    handleRedirect,
  } = useContext(AppContext);

  const redirectProducts = () => {
    handleRedirect('/customer/products');
  };

  const redirectOrders = () => {
    handleRedirect('/customer/orders');
  };

  const section1 = {
    function1: redirectProducts,
    nameSection1: 'Produtos',
  };

  const section2 = {
    function2: redirectOrders,
    nameSection2: 'Meus Pedidos',
  };
  return (
    <>
      <NavBar section1={ section1 } section2={ section2 } />
      <span>Detalhe do Pedido</span>
      <div>


      </div>
      <span
        data-testid={ `customer_order_details__element-order-details-label-order-${id}` }
      >
        Pedido XXX
      </span>
      <span> P.Vendedora:</span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {' '}
        Fulana Fulana
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {' '}
        XX/XX/XX
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        Status
      </span>
      <button type="button"> Marcar como entregue</button>
      <table>
        <thead>
          <th>
            PEDIDO XXXX

          </th>
          <td>P. Vendedora:</td>
          <td> FULANA FULANA</td>
          <th> 01/01/2022</th>
          <td> STATUS PEDIDO</td>
          <td><button type="button">Marcar como entregue</button></td>
        </thead>
        <th>Hi</th>
        <th>Hi2</th>
        <tbody>
          <tr>Body</tr>
        </tbody>
      </table>
    </>
  );
}
