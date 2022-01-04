import React, { useState } from 'react';

export default function Register() {
  const [rgName, setRgName] = useState('');
  const [rgEmail, setRgEmail] = useState('');
  const [rgPwd, setRgPwd] = useState('');
  const [err, setErr] = useState('');
  const [validName, setValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    return 'ola';
  };

  const vldtPwd = (password) => {
    const number = 6;
    const error = 'password must be valid';
    setErr(error);
    if (!password || password.length < number) return;
    setErr(null);
    setValidPwd(true);
  };

  const vldtName = (name) => {
    const number = 12;
    const error = 'name must be valid';
    setErr(error);
    if (!name || name.length < number) return;
    setErr(null);
    setValidName(true);
  };

  const vldtEmail = (email) => {
    const error = 'email must be valid';
    setErr(error);
    const validRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
    );
    const validEmail = validRegex.test(email);
    if (!email || !validEmail) return;
    setErr(null);
    setIsValidEmail(true);
  };
  return (
    <section className="registerContainer">
      <h1 className="appalmirinha">Cadastro</h1>
      <form
        className="register-form"
        onSubmit={ (event) => handleSubmit(event) }
      >
        <label htmlFor="name" className="name">
          <p className="placeE">Name:</p>
          <input
            type="text"
            name="name"
            id="name"
            value={ rgName }
            onChange={
              ({ target }) => { setRgName(target.value); vldtName(target.value); }
            }
            data-testid="6"
          />
        </label>
        <label htmlFor="email" className="email">
          <p className="placeE">Email:</p>
          <input
            type="text"
            name="email"
            id="email"
            value={ rgEmail }
            onChange={
              ({ target }) => { setRgEmail(target.value); vldtEmail(target.value); }
            }
            data-testid="7"
          />
        </label>
        <label htmlFor="password" className="teste">
          <p className="placeS">Senha:</p>
          <input
            type="password"
            name="password"
            id="password"
            value={ rgPwd }
            onChange={
              ({ target }) => { setRgPwd(target.value); vldtPwd(target.value); }
            }
            data-testid="8"
          />
        </label>
        <button
          type="submit"
          data-testid="register-submit-btn"
          disabled={ !validName || !isValidEmail || !validPwd }
        >
          Cadastrar
        </button>
      </form>
      <span data-testid="9">{ err }</span>
    </section>
  );
}
