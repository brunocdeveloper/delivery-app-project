import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import getUsersByRole from '../api/users';
import createSale from '../api/customer';

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
    <section>
      <h1>Detalhes e Endereço de Entrega</h1>
      <section>
        <label
          htmlFor="delivery-seller"
        >
          <span>P.Vendedora Responsável:</span>
          <select
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
          </select>
        </label>
        <label
          htmlFor="delivery-address"
        >
          <span>Endereço:</span>
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            onChange={ (e) => setSelectedAddress(e.target.value) }
          />
        </label>
        <label
          htmlFor="delivery-number"
        >
          <span>Número:</span>
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            onChange={ (e) => setSelectedNumber(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleSubmit }
        >
          Finalizar Pedido
        </button>
      </section>
    </section>
  );
}

// Proptypes
DeliveryInfos.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
