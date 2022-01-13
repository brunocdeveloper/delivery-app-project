import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function AdminTable() {
  const { usersList } = useContext(AppContext);
  console.log(usersList);
  const dataidCommon = 'admin_manage__element-user-table';
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        { usersList.length > 0 && usersList.map((user, i) => (
          <tr key={ user.name }>
            <td data-testid={ `${dataidCommon}-item-number-${i}` }>{i + 1}</td>
            <td data-testid={ `${dataidCommon}-name-${i}` }>{user.name}</td>
            <td data-testid={ `${dataidCommon}-email-${i}` }>{user.email}</td>
            <td data-testid={ `${dataidCommon}-role-${i}` }>{user.role}</td>
            <button
              data-testid={ `${dataidCommon}-remove-${i}` }
              type="button"
            >
              Excluir
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
