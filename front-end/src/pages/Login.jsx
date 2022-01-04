import { React, useState } from 'react';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const validateLogin = () => {
    const { email, password } = user;
    const validRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
    );
    const validEmail = validRegex.test(email);
    const magicNumber = 6;
    if (validEmail && password.length > magicNumber) return true;
    return false;
  };

  const handleChangeInputs = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value });
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
            data-testid="1"
            onChange={ (e) => handleChangeInputs(e) }
          />
        </label>
        <label htmlFor="password-login">
          Senha
          <input
            id="password-login"
            type="password"
            name="password"
            data-testid="2"
            onChange={ (e) => handleChangeInputs(e) }
          />
        </label>
        <button
          type="button"
          data-testid="3"
          disabled={ !validateLogin() }
        >
          Login
        </button>
        <button type="button" data-testid="4">Ainda não tenho conta</button>
        <span data-testid="5">Elemento oculto (Mensagem de erro)</span>
      </form>
    </div>
  );
}
