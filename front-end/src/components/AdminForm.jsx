import React, { useState } from 'react';

export default function AdminForm() {
  const [
    admName,
    admSetName,
    email,
    setEmail,
    password,
    setPassword,
  ] = useState('');

  const validateLogin = () => {
    const nameLenght = 12;
    const pwdLength = 6;
    const validRegex = new RegExp(
      /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/,
    ); 
    const validEmail = validRegex.test(email);
    if (validEmail
      && password.length >= pwdLength
      && admName.length >= nameLenght) return true;
    return false;
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
            placeholder="Nome e Sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ (e) => admSetName(e.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="text"
            name="password"
            id="password"
            placeholder="******"
            data-testid="admin_manage__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <label htmlFor="type">
          Tipo
          <select
            name="type"
            id="type"
            data-testid="admin_manage__select-role"
          >
            <option value="select">select</option>
            <option value="seller">vendedor</option>
            <option value="customer">cliente</option>
            <option value="administrator">administrador</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ !validateLogin() }
        >
          CADASTRAR
        </button>
      </form>
    </section>
  );
}
