import React from 'react';
import AppContext from '../context/AppContext';

export default function NavBarAdmin() {
  const {
    handleRedirect,
  } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('user');
    handleRedirect('/');
  };

  const currentUser = () => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (!data) return handleRedirect('/');

    const { name } = data;
    return name;
  };

  return (
    <header>
      { admin && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          GERENCIAR USUÁRIOS
        </button>
      ) }
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
