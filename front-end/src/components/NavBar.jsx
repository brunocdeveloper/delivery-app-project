import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

export default function NavBar(props) {
  const { button1, button2 } = props;

  const {
    redirectTo,
    setRedirectTo,
  } = useContext(AppContext);

  useEffect(() => {
    console.log('');
    return () => {
      setRedirectTo({ ...redirectTo, shouldRedirect: false });
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setRedirectTo({ pathName: '/login', shouldRedirect: true });
  };

  const currentUser = () => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (!data) {
      setRedirectTo({ pathName: '/login', shouldRedirect: true });
      return <Redirect to={ redirectTo.pathName } />;
    }
    const { name } = data;
    return name;
  };

  const navigateTo = (pathName) => {
    setRedirectTo({ pathName, shouldRedirect: true });
  };

  if (redirectTo.shouldRedirect) {
    return <Redirect to={ redirectTo.pathName } />;
  }

  // const actionButton2 = () => {
  //   if (button1) return () => navigateTo('/customer/orders');
  //   return () => navigateTo('/seller/orders');
  // };

  return (
    <header>
      { button1 && (
        <button
          onClick={ () => navigateTo('/customer/products') }
          type="button"
          data-testid="customer_products__element-navbar-link-products"
        >
          {button1}
        </button>)}
      {/* { button1
        ? (
          <button
            onClick={ () => navigateTo('/customer/orders') }
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            {button2}
          </button>)
        : (
          <button
            onClick={ () => navigateTo('/seller/orders') }
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            {button2}
          </button>)} */}
      <button
        onClick={ button1
          ? () => navigateTo('/customer/orders')
          : () => navigateTo('/seller/orders') }
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        {button2}
      </button>
      <span data-testid="customer_products__element-navbar-user-full-name">
        {currentUser()}
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        Sair
      </button>
    </header>
  );
}

NavBar.propTypes = {
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
};

/* <button
onClick={ button1
  ? () => navigateTo('/customer/orders')
  : () => navigateTo('/seller/orders') }
type="button"
data-testid="customer_products__element-navbar-link-orders"
> */
