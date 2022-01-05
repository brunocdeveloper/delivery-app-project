import React from 'react';
import PropTypes from 'prop-types';

export default function NavBar(props) {
  const { section1, section2, currentUser } = props;
  //   const { function1, nameSection1 } = section1;
  //   const { function2, nameSection2 } = section2;
  return (
    <header>
      { section1 && (
        <button
          onClick={ () => section1.function1() }
          type="button"
        >
          {section1.nameSection1}
        </button>)}
      { section2 && (
        <button
          onClick={ () => section2.function2() }
          type="button"
        >
          {section2.nameSection2}
        </button>)}
      <span>{currentUser}</span>
      <button type="button">Sair</button>
    </header>
  );
}

NavBar.propTypes = {
  section1: PropTypes.objectOf.isRequired,
  section2: PropTypes.objectOf.isRequired,
  currentUser: PropTypes.string.isRequired,
};
