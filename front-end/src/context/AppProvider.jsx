import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [rgName, setRgName] = useState('');
  const [rgEmail, setRgEmail] = useState('');
  const [rgPwd, setRgPwd] = useState('');
  const [err, setErr] = useState('');
  const [validName, setValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const vldtPwd = (password) => {
    const number = 6;
    const error = 'password must be valid';
    setErr(error);
    if (!password || password.length < number) return;
    setErr(null);
    setValidPwd(true);
  };

  const vldtName = (name) => {
    const number = 12;
    const error = 'name must be valid';
    setErr(error);
    if (!name || name.length < number) return;
    setErr(null);
    setValidName(true);
  };

  const vldtEmail = (email) => {
    const error = 'email must be valid';
    setErr(error);
    const validRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
    );
    const validEmail = validRegex.test(email);
    if (!email || !validEmail) return;
    setErr(null);
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
