import React, { useEffect, useContext } from 'react';
import AdminForm from '../components/AdminForm';
import NavBarAdmin from '../components/NavBarAdmin';
import getUsers from '../api/getUsers';
import AppContext from '../context/AppContext';
import AdminTable from '../components/AdminTable';
import '../styles/pages/Admin.css';

export default function Admin() {
  const {
    setUsersList,
    addedUser,
    setAddedUser,
  } = useContext(AppContext);

  const getUsersList = async () => {
    const result = await getUsers();
    setUsersList(result);
    setAddedUser(false);
  };

  useEffect(() => {
    getUsersList();
  }, [addedUser]);

  return (
    <section className="admin-page-container">
      <NavBarAdmin />
      <h3 className="admin-title">Cadastrar novo usuário</h3>
      <AdminForm />
      <AdminTable />
    </section>
  );
}
