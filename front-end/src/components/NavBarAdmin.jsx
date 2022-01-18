import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { ButtonExit, ButtonUsers,
  Header,
  SpanCurrentUser } from '../styles/components/management/style';

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
    <Header>
      <ButtonUsers
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        GERENCIAR USUÁRIOS
      </ButtonUsers>
      <div>
        <SpanCurrentUser
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { currentUser() }
        </SpanCurrentUser>
        <ButtonExit
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </ButtonExit>
      </div>
    </Header>
  );
}
