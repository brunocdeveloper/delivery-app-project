import React from 'react';
import AdminForm from '../components/AdminForm';
import NavBarAdmin from '../components/NavBarAdmin';

export default function Admin() {
  return (
    <div>
      <NavBarAdmin />
      <h3>Cadastrar novo usuário</h3>
      <AdminForm />
    </div>
  );
}
