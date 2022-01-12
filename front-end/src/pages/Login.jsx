import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function Login() {
  const {
    user,
    handleLoginSubmit,
    handleChangeInputs,
    redirectTo,
    setRedirectTo,
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
    if (userInfo && userInfo.token) {
      return setRedirectTo({
        pathName: '/customer/products',
        shouldRedirect: true,
      });
    }
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
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !validateLogin() }
          onClick={ () => handleLoginSubmit() }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => setRedirectTo({ pathName: '/register', shouldRedirect: true }) }
        >
          Ainda não tenho conta
        </button>
        <span
          data-testid="common_login__element-invalid-email"
        >
          Elemento oculto (Mensagem de erro)
        </span>
      </form>
    </div>
  );
}
