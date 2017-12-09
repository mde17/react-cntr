import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function MainWrapper({ children }) {
  return (
    <div className="MainWrapper">
      {children}
    </div>
  );
}

MainWrapper.propTypes = propTypes;

export default MainWrapper;
