import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    count: PropTypes.numeric,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

function CounterItem({item, deleteItem, decrement, increment}) {
  return (
    <li className="CounterItem">
      <div className="CounterItem__info">
        <button
          title="Delete"
          className="CounterItem__btn CounterItem__btn--delete"
          onClick={deleteItem.bind(null, item.id)}>
          X</button>
        <span className="CounterItem__title">{item.title}</span>
      </div>
      <div className="CounterItem__controls">
        <button
          title="Decrement"
          className="CounterItem__btn CounterItem__btn--decrement"
          onClick={decrement.bind(null, item.id)}>
          -</button>
        <span className="CounterItem__count">{item.count}</span>
        <button
          title="Increment"
          className="CounterItem__btn CounterItem__btn--increment"
          onClick={increment.bind(null, item.id)}>
          +</button>
      </div>
    </li>
  );
}

CounterItem.propTypes = propTypes;

export default CounterItem;
