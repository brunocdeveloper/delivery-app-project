import { React, useState, useContext } from 'react';
import AppContext from '../context/AppContext';
// import { useHistory } from 'react-router-dom';
import handleLogin from '../api/login';

export default function Login() {
  const {
    handleRedirect,
  } = useContext(AppContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

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

  const handleChangeInputs = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleLoginSubmit = async () => {
    try {
      const userWithToken = await handleLogin(user);
      console.log(userWithToken);
      if (userWithToken && userWithToken.token && userWithToken.role === 'customer') {
        handleRedirect('/customer/products');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          onClick={ () => handleRedirect('/register') }
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
