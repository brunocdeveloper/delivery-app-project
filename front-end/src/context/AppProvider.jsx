import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [rgName, setRgName] = useState('');
  const [rgEmail, setRgEmail] = useState('');
  const [rgPwd, setRgPwd] = useState('');
  const [err, setErr] = useState(true);
  const [validName, setValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(`${path}`);
  };

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

  const contextValue = {
    rgName,
    setRgName,
    rgEmail,
    setRgEmail,
    rgPwd,
    setRgPwd,
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
    handleRedirect,
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
