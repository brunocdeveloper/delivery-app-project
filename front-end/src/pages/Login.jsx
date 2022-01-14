import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import GlobalButton from '../styles/components/button';

export default function Login() {
  const {
    user,
    handleLoginSubmit,
    handleChangeInputs,
    redirectTo,
    setRedirectTo,
    redirectToOwnerPage,
  } = useContext(AppContext);

  const validateLogin = () => {
    const { email, password } = user;
    const validRegex = new RegExp(
      /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/,
    );
    const validEmail = validRegex.test(email);
    const magicNumber = 6;
    if (validEmail && password.length >= magicNumber) return true;
    return false;
  };

  const checkLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) redirectToOwnerPage(userInfo.role);
  };

  useEffect(() => {
    checkLocalStorage();
    return () => {
      setRedirectTo({ ...redirectTo, shouldRedirect: false });
    };
  }, []);

  if (redirectTo.shouldRedirect) return <Redirect to={ redirectTo.pathName } />;

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email-login">
          Login
          <input
            id="email-login"
            type="email"
            name="email"
            data-testid="common_login__input-email"
            onChange={ (e) => handleChangeInputs(e) }
          />
        </label>
        <label htmlFor="password-login">
          Senha
          <input
            id="password-login"
            type="password"
            name="password"
            data-testid="common_login__input-password"
            onChange={ (e) => handleChangeInputs(e) }
          />
        </label>
        <GlobalButton
          login
          type="button"
          data-testid="common_login__button-login"
          disabled={ !validateLogin() }
          onClick={ () => handleLoginSubmit() }
        >
          Login
        </GlobalButton>
        <GlobalButton
          register
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => setRedirectTo({ pathName: '/register', shouldRedirect: true }) }
        >
          Ainda não tenho conta
        </GlobalButton>
        <span
          data-testid="common_login__element-invalid-email"
        >
          Elemento oculto (Mensagem de erro)
        </span>
      </form>
    </div>
  );
}
