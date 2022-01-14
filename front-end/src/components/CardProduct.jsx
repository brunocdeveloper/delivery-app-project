import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import '../styles/components/products/cardProducts.css';

export default function CardProduct(props) {
  const { product: { id, name, price, urlImage } } = props;
  const [quantity, setQuantity] = useState(0);
  const { cartItens, setCartItens, setSubTotal, subTotal } = useContext(AppContext);
  const changePriceToComa = (value) => value.toString().replace(/\./, ',');

  const removeItem = () => {
    const foundIndexItem = cartItens.findIndex((item) => item.id === id);
    const negativeOne = -1;
    if (foundIndexItem === negativeOne) {
      return setCartItens([...cartItens, { id, name, price, quantity: quantity + 1 }]);
    }

    const newCartItem = cartItens;
    newCartItem[foundIndexItem].quantity -= 1;
    if (newCartItem[foundIndexItem].quantity === 0) {
      newCartItem.splice(foundIndexItem, 1);
      return setCartItens(newCartItem);
    }
    setCartItens(newCartItem);
  };

  const addItem = () => {
    const foundIndexItem = cartItens.findIndex((item) => item.id === id);
    const negativeOne = -1;
    if (foundIndexItem === negativeOne) {
      const newCartItens = [...cartItens, { id, name, price, quantity: quantity + 1 }];
      setCartItens(newCartItens);
      return;
    }

    const newCartItem = cartItens;
    newCartItem[foundIndexItem].quantity += 1;
    setCartItens(newCartItem);
  };

  const addByInput = () => {
    if (quantity < 1) return;
    const foundIndexItem = cartItens.findIndex((item) => item.id === id);
    const negativeOne = -1;
    if (foundIndexItem === negativeOne) {
      return setCartItens([...cartItens, { id, name, price, quantity }]);
    }
    const newCartItem = cartItens;
    newCartItem[foundIndexItem].quantity = quantity;
  };

  const calculateTotal = () => {
    const totalPrice = cartItens
      .reduce((acc, { price: unitPrice, quantity: qty }) => acc + (unitPrice * qty), 0);
    setSubTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [quantity, subTotal, calculateTotal]);

  useEffect(() => {
    addByInput();
    calculateTotal();
  }, [quantity]);

  const addOrRemoveQuantity = ({ target }) => {
    const parseQuantity = Number(target.value);
    switch (target.name) {
    case 'remove':
      if (quantity < 1) {
        setQuantity(0);
      } else {
        setQuantity(quantity - 1);
      }
      if (quantity > 0) {
        removeItem();
      }
      break;
    case 'add':
      setQuantity(quantity + 1);
      addItem();
      break;
    case 'input':
      setQuantity(parseQuantity);
      calculateTotal();
      break;
    default:
      break;
    }
  };

  return (
    <main id={ id } className="card-products-container">
      <section className="card-product-box">
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { changePriceToComa(price) }
        </span>
        <img
          clasName="img-card-product"
          width="60px"
          src={ urlImage }
          alt={ `${name}` }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </section>
      <footer className="card-footer">
        <span
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </span>
        <section className="btn-card-item-container">
          <button
            idCart={ id }
            name="remove"
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ ({ target }) => addOrRemoveQuantity({ target }) }
          >
            -
          </button>
          <input
            name="input"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ (e) => addOrRemoveQuantity(e) }
            value={ quantity }
          />
          <button
            name="add"
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ ({ target }) => addOrRemoveQuantity({ target }) }
          >
            +
          </button>
        </section>
      </footer>
    </main>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
