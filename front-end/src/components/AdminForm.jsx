import React from 'react';

export default function AdminForm() {
  return (
    <section>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            placeholder="Nome e Sobrenome"
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="text"
            id="password"
            placeholder="******"
            data-testid="admin_manage__input-password"
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
        >
          CADASTRAR
        </button>
      </form>
    </section>
  );
}
