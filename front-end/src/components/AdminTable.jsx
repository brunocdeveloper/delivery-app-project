import React, { useContext } from 'react';
import deleteUserById from '../api/deleteUserById';
import AppContext from '../context/AppContext';
import '../styles/components/adminTable/admintable.css';

export default function AdminTable() {
  const { usersList, setUsersList } = useContext(AppContext);
  const dataidCommon = 'admin_manage__element-user-table';

  const deleteUser = async (id) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await deleteUserById(id, token);
    const updatedList = usersList.filter((user) => user.id !== Number(id));
    setUsersList(updatedList);
  };

  return (
    <>
      <h3 className="admin-table-title">Lista de usuários</h3>
      <table className="table-admin-list-user-container">
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody className="body-register-users-information">
          { usersList.length > 0 && usersList.map((user, i) => (
            <tr key={ user.name }>
              <td
                className="td-user-id"
                data-testid={ `${dataidCommon}-item-number-${i}` }
              >
                {i + 1}
              </td>
              <td
                className="td-user-name"
                data-testid={ `${dataidCommon}-name-${i}` }
              >
                {user.name}
              </td>
              <td
                className="td-user-email"
                data-testid={ `${dataidCommon}-email-${i}` }
              >
                {user.email}
              </td>
              <td
                className="td-user-role"
                data-testid={ `${dataidCommon}-role-${i}` }
              >
                {user.role}
              </td>
              <button
                className="btn-remove-register"
                name={ user.id }
                data-testid={ `${dataidCommon}-remove-${i}` }
                type="button"
                onClick={ ({ target }) => deleteUser(target.name) }
              >
                Excluir
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
