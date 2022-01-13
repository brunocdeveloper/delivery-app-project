import React from 'react';
import PropTypes from 'prop-types';
import { Button, RegisterButton, DisabledButton } from './style';

function GlobalButton({ login, register, disable, children, ...rest }) {
  if (login) {
    return <Button { ...rest }>{ children }</Button>;
  } if (register) {
    return <RegisterButton { ...rest }>{ children }</RegisterButton>;
  }
  return <DisabledButton { ...rest }>{ children }</DisabledButton>;
}

// Proptypes
GlobalButton.propTypes = {
  login: PropTypes.bool.isRequired,
  register: PropTypes.bool.isRequired,
  disable: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default GlobalButton;
