import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import getUsersByRole from '../api/users';
import createSale from '../api/customer';
import { ContainerDeliveryDetails, ContainerSectionDelivery,
  FinishButton,
  InputAdress,
  InputNumber,
  SelectSeller,
  SpanAdress,
  SpanNumber,
  SpanSeller,
  TitleDeliveryInfos } from '../styles/components/deliveryInfos.js/style';

export default function DeliveryInfos({ totalPrice }) {
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [sellers, setSellers] = useState([]);
  const [userToken, setUserToken] = useState(null);

  const {
    cartItens,
    redirectTo,
    setRedirectTo,
  } = useContext(AppContext);

  useEffect(() => {
    console.log('');
    return () => {
      setRedirectTo({ ...redirectTo, shouldRedirect: false });
    };
  }, []);

  const handleSellers = async (token) => {
    const users = await getUsersByRole(token, { role: 'seller' });
    setSellers(users);
  };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    setUserToken(token);
    handleSellers(token);
  }, []);

  useEffect(() => {
    console.log(selectedSeller);
  }, [selectedSeller]);

  const handleSubmit = async () => {
    const sale = {
      sellerId: Number(selectedSeller),
      deliveryAddress: selectedAddress,
      deliveryNumber: selectedNumber,
      prodArray: cartItens,
      totalPrice: totalPrice.toFixed(2),
    };
    const saleId = await createSale(userToken, sale);
    console.log(sale);
    // handleRedirect(`/customer/orders/${saleId}`);
    setRedirectTo({
      pathName: `/customer/orders/${saleId}`,
      shouldRedirect: true,
    });
  };

  if (redirectTo.shouldRedirect) {
    return <Redirect to={ redirectTo.pathName } />;
  }

  return (
    <ContainerDeliveryDetails>
      <TitleDeliveryInfos>Detalhes e Endereço de Entrega</TitleDeliveryInfos>
      <ContainerSectionDelivery>
        <label
          htmlFor="delivery-seller"
        >
          <SpanSeller>P.Vendedora Responsável:</SpanSeller>
          <SelectSeller
            id="delivery-seller"
            onChange={ (e) => setSelectedSeller(e.target.value) }
            data-testid="customer_checkout__select-seller"
          >
            <option
              value=""
            >
              Selecione
            </option>
            { sellers && sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
              >
                {seller.name}
              </option>
            ))}
          </SelectSeller>
        </label>
        <div>
          <SpanAdress>Endereço:</SpanAdress>
          <InputAdress
            data-testid="customer_checkout__input-address"
            type="text"
            onChange={ (e) => setSelectedAddress(e.target.value) }
          />
        </div>
        <div>
          <SpanNumber>Número:</SpanNumber>
          <InputNumber
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            onChange={ (e) => setSelectedNumber(e.target.value) }
          />
        </div>
      </ContainerSectionDelivery>
      <FinishButton
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleSubmit }
      >
        Finalizar Pedido
      </FinishButton>
    </ContainerDeliveryDetails>
  );
}

// Proptypes
DeliveryInfos.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
