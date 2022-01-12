import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function NavBarAdmin() {
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
    const { name } = data;
    return name;
  };

  if (redirectTo.shouldRedirect) {
    return <Redirect to={ redirectTo.pathName } />;
  }

  return (
    <header>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        GERENCIAR USUÁRIOS
      </button>
      <span data-testid="customer_products__element-navbar-user-full-name">
        { currentUser() }
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        Sair
      </button>
    </header>
  );
}
