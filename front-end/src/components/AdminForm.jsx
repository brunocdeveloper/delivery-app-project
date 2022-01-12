import React, { useContext, useEffect, useState } from 'react';
import registerUser from '../api/register';
import AppContext from '../context/AppContext';

export default function AdminForm() {
  const {
    rgName,
    setRgName,
    rgEmail,
    setRgEmail,
    rgPwd,
    setRgPwd,
    validName,
    isValidEmail,
    validPwd,
    vldtPwd,
    vldtName,
    vldtEmail,
    rgRole,
    setRgRole,
  } = useContext(AppContext);
  const [isRoleValid, setIsRoleValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const vldtRole = (role) => {
    if (!role) return setIsRoleValid(false);
    setIsRoleValid(true);
  };

  useEffect(() => {
    if (validName && isValidEmail && validPwd && isRoleValid) {
      return setIsDisabled(false);
    }
    setIsDisabled(true);
  }, [rgEmail, rgName, rgPwd, rgRole]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const payload = { rgName, rgEmail, rgPwd, rgRole };
    await registerUser(payload, user.token);
    setRgEmail('');
    setRgName('');
    setRgPwd('');
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
      break;
    case 'password':
      setRgPwd(e.target.value);
      vldtPwd(e.target.value);
      break;
    case 'role':
      setRgRole(e.target.value);
      vldtRole(e.target.value);
      break;
    default:
      break;
    }
  };

  return (
    <section>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            value={ rgName }
            placeholder="Nome e Sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ (e) => handleOnChangeInput(e) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            value={ rgEmail }
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            onChange={ (e) => handleOnChangeInput(e) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            value={ rgPwd }
            placeholder="******"
            data-testid="admin_manage__input-password"
            onChange={ (e) => handleOnChangeInput(e) }
          />
        </label>
        <label htmlFor="type">
          Tipo
          <select
            name="role"
            id="type"
            value={ rgRole }
            data-testid="admin_manage__select-role"
            onChange={ (e) => handleOnChangeInput(e) }
          >
            <option value="">selecione</option>
            <option value="seller">vendedor</option>
            <option value="customer">cliente</option>
            <option value="administrator">administrador</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ isDisabled }
          onClick={ (e) => handleSubmit(e) }
        >
          CADASTRAR
        </button>
      </form>
      <span
        data-testid="admin_manage__element-invalid-register"
      >
        { isDisabled && 'Erro no sistema' }
      </span>
    </section>
  );
}
