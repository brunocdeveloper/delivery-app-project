import { React, useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/pages/login.css';
import Logo from '../images/logoZB.gif';

export default function Login() {
  const {
    handleRedirect,
    user,
    handleLoginSubmit,
    handleChangeInputs,
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

  return (
    <section className="login-container">
      <div className="img-logo">
        <img className="logo" src={ Logo } alt="logo zé Bitira" width="200px" />
      </div>
      <form className="login-form-container">
        <label htmlFor="email-login">
          Login
          <input
            className="input-login"
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
            className="input-login"
            id="password-login"
            type="password"
            name="password"
            data-testid="common_login__input-password"
            onChange={ (e) => handleChangeInputs(e) }
          />
        </label>
        <section className="btn-container">
          <button
            className="btn-login"
            type="button"
            data-testid="common_login__button-login"
            disabled={ !validateLogin() }
            onClick={ () => handleLoginSubmit() }
          >
            LOGIN
          </button>
          <button
            className="btn-register"
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => handleRedirect('/register') }
          >
            Ainda não tenho conta
          </button>
        </section>
      </form>
      <span
        className="span-error"
        data-testid="common_login__element-invalid-email"
      >
        Elemento oculto (Mensagem de erro)
      </span>
    </section>
  );
}
