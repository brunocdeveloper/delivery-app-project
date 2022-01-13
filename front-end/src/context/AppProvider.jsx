import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import handleLogin from '../api/login';

function AppProvider({ children }) {
  const [rgName, setRgName] = useState('');
  const [rgEmail, setRgEmail] = useState('');
  const [rgPwd, setRgPwd] = useState('');
  const [rgRole, setRgRole] = useState('');
  const [err, setErr] = useState(true);
  const [validName, setValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItens, setCartItens] = useState([]);
  const [subTotal, setSubTotal] = useState();
  const [orders, setOrders] = useState([]);
  const [redirectTo, setRedirectTo] = useState({
    pathName: '/',
    shouldRedirect: false,
  });
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const vldtPwd = (password) => {
    const number = 6;
    if (!password || password.length < number) return setValidPwd(false);
    setValidPwd(true);
  };

  const vldtName = (name) => {
    const number = 12;
    if (!name || name.length < number) return setValidName(false);
    setValidName(true);
  };

  const vldtEmail = (email) => {
    const validRegex = new RegExp(
      /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/,
    );
    const validEmail = validRegex.test(email);
    if (!email || !validEmail) return setIsValidEmail(false);
    setIsValidEmail(true);
  };

  const redirectToOwnerPage = (role) => {
    switch (role) {
    case 'customer':
      setRedirectTo({ pathName: '/customer/products', shouldRedirect: true });
      break;
    case 'seller':
      setRedirectTo({ pathName: '/seller/orders', shouldRedirect: true });
      break;
    case 'administrator':
      setRedirectTo({ pathName: '/admin/manage', shouldRedirect: true });
      break;
    default:
      break;
    }
  };

  const handleLoginSubmit = async () => {
    try {
      const userWithToken = await handleLogin(user);
      if (userWithToken && userWithToken.token) {
        const { name, email, role, token } = userWithToken;
        await localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
        redirectToOwnerPage(role);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInputs = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value });
  };

  const contextValue = {
    rgName,
    setRgName,
    rgEmail,
    setRgEmail,
    rgPwd,
    setRgPwd,
    rgRole,
    setRgRole,
    err,
    setErr,
    validName,
    setValidName,
    isValidEmail,
    setIsValidEmail,
    validPwd,
    setValidPwd,
    vldtPwd,
    vldtName,
    vldtEmail,
    products,
    setProducts,
    user,
    setUser,
    handleLoginSubmit,
    handleChangeInputs,
    cartItens,
    setCartItens,
    subTotal,
    setSubTotal,
    orders,
    setOrders,
    redirectTo,
    setRedirectTo,
    redirectToOwnerPage,
  };

  AppProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
