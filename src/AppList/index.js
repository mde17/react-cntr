import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  children: PropTypes.node,
};

function AppList({ children }) {
  return (
    <ul className="AppList">
      {children}
    </ul>
  );
}

AppList.propTypes = propTypes;

export default AppList;
