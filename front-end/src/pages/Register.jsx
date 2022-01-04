import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import registerUser from '../api/register';

export default function Register() {
  const {
    rgName,
    setRgName,
    rgEmail,
    setRgEmail,
    rgPwd,
    setRgPwd,
    err,
    validName,
    isValidEmail,
    validPwd,
    vldtPwd,
    vldtName,
    vldtEmail,
  } = useContext(AppContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { rgName, rgEmail, rgPwd };
    await registerUser(payload);
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
            data-testid="common_register__input-name"
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
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
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
      <span data-testid="common_register__button-register">{ err }</span>
    </section>
  );
}
