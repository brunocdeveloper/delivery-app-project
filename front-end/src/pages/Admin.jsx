import React, { useEffect, useState } from 'react';
import AdminForm from '../components/AdminForm';
import NavBarAdmin from '../components/NavBarAdmin';
import getUsers from '../api/getUsers';

export default function Admin() {
  const [usersList, setUsersList] = useState([]);
  
  const getUsersList = async () => {
    const result = await getUsers();
    setUsersList(result);
    console.log(usersList);
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <section>
      <NavBarAdmin />
      <h3>Cadastrar novo usuário</h3>
      <AdminForm />
    </section>
  );
}
