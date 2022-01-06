import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DeliveryInfos({ sellers, products, totalPrice }) {
  const [selectedSeller, setSelectedSeller] = useState(sellers[0]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      seller_id: selectedSeller.id,
      address: selectedAddress,
      number: selectedNumber,
      products,
      totalPrice,
    };
    console.log(body);
  };

  return (
    <section>
      <h1>Detalhes e Endereço de Entrega</h1>
      <section>
        <label
          htmlFor="delivery-seller"
        >
          <span>P.Vendedora Responsável:</span>
          <select>
            {sellers.map((seller) => (
              <option
                data-testid="customer_checkout__select-seller"
                key={ seller.id }
                value={ seller.id }
                onChange={ (e) => setSelectedSeller(e.target.value) }
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
  sellers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  totalPrice: PropTypes.number.isRequired,
};
