import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  counters: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

const defaultProps = {
  counters: [],
};

const total = counters => counters.reduce((c, n) => c + n.count, 0);

function CounterTotal({ counters }) {
  return (
    <div className="CounterTotal">
      <p className="CounterTotal__text">Total: {total(counters)}</p>
    </div>
  );
}

CounterTotal.propTypes = propTypes;
CounterTotal.defaultProps = defaultProps;

export default CounterTotal;
