import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
    setErr,
    handleLoginSubmit,
    handleChangeInputs,
    redirectTo,
  } = useContext(AppContext);

  useEffect(() => {
    if (validName && isValidEmail && validPwd) {
      return setErr(false);
    }
    setErr(true);
  }, [rgEmail, rgName, rgPwd]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { rgName, rgEmail, rgPwd };
    const registered = await registerUser(payload);
    if (!registered) return;
    await handleLoginSubmit();
  };

  const handleOnChangeInput = (e) => {
    switch (e.target.name) {
    case 'name':
      setRgName(e.target.value);
      vldtName(e.target.value);
      break;
    case 'email':
      setRgEmail(e.target.value);
      vldtEmail(e.target.value);
      handleChangeInputs(e);
      break;
    case 'password':
      setRgPwd(e.target.value);
      vldtPwd(e.target.value);
      handleChangeInputs(e);
      break;
    default:
      break;
    }
  };

  if (redirectTo.shouldRedirect) return <Redirect to={ redirectTo.pathName } />;

  return (
    <section className="registerContainer">
      <h1 className="appalmirinha">Cadastro</h1>
      <form
        className="register-form"
      >
        <label htmlFor="name" className="name">
          <p className="placeE">Name:</p>
          <input
            type="text"
            name="name"
            id="name"
            value={ rgName }
            onChange={
              (e) => { handleOnChangeInput(e); }
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
              (e) => { handleOnChangeInput(e); }
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
              (e) => { handleOnChangeInput(e); }
            }
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ err }
          onClick={ (e) => handleSubmit(e) }
        >
          Cadastrar
        </button>
      </form>
      <span data-testid="common_register__element-invalid_register">{ err }</span>
    </section>
  );
}
