import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import {
  NavBarSubComponent,
  NavOutButton,
  NavButtonOne,
  NameDiv,
  NavButtonTwo } from '../styles/components/navbar/style';

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

  return (
    <NavBarSubComponent>
      <div>
        { button1 && (
          <NavButtonOne
            onClick={ () => navigateTo('/customer/products') }
            type="button"
            data-testid="customer_products__element-navbar-link-products"
          >
            {button1}
          </NavButtonOne>)}
        <NavButtonTwo
          onClick={ button1
            ? () => navigateTo('/customer/orders')
            : () => navigateTo('/seller/orders') }
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          {button2}
        </NavButtonTwo>
      </div>
      <div style={ { display: 'flex' } }>
        <NameDiv data-testid="customer_products__element-navbar-user-full-name">
          {currentUser()}
        </NameDiv>
        <NavOutButton
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout() }
        >
          Sair
        </NavOutButton>
      </div>
    </NavBarSubComponent>
  );
}

NavBar.propTypes = {
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
};
