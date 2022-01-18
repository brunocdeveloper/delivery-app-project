import React, { useContext } from 'react';
import deleteUserById from '../api/deleteUserById';
import AppContext from '../context/AppContext';
import { AdmEmail,
  AdmItem,
  AdmName,
  AdmRemove,
  AdmType,
  ButtonRemove,
  SectionUsers,
  TablemItemsTr,
  TableTr,
  TdEmail,
  TdItem,
  TdName,
  TdType,
  TitleList } from '../styles/components/listUsers/styles';

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
    <SectionUsers>
      <TitleList>Lista de usuários</TitleList>
      <table>
        <thead>
          <TableTr>
            <AdmItem>Item</AdmItem>
            <AdmName>Nome</AdmName>
            <AdmEmail>E-mail</AdmEmail>
            <AdmType>Tipo</AdmType>
            <AdmRemove>Excluir</AdmRemove>
          </TableTr>
        </thead>
        <tbody>
          { usersList.length > 0 && usersList.map((user, i) => (
            <TablemItemsTr key={ user.name }>
              <TdItem data-testid={ `${dataidCommon}-item-number-${i}` }>{i + 1}</TdItem>
              <TdName data-testid={ `${dataidCommon}-name-${i}` }>{user.name}</TdName>
              <TdEmail data-testid={ `${dataidCommon}-email-${i}` }>{user.email}</TdEmail>
              <TdType data-testid={ `${dataidCommon}-role-${i}` }>{user.role}</TdType>
              <ButtonRemove
                name={ user.id }
                data-testid={ `${dataidCommon}-remove-${i}` }
                type="button"
                onClick={ ({ target }) => deleteUser(target.name) }
              >
                Excluir
              </ButtonRemove>
            </TablemItemsTr>
          ))}
        </tbody>
      </table>
    </SectionUsers>
  );
}
