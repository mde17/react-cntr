import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  counterDataSelector,
  loadingSelector,
} from './selectors';

import {
  loadCounters,
  addCounterItem,
  deleteCounterItem,
  increment,
  decrement,
} from './actions';

import AppList from '../AppList';
import CounterForm from '../CounterForm';
import CounterItem from '../CounterItem';
import CounterTotal from '../CounterTotal';
import MainWrapper from '../MainWrapper';

const propTypes = {
  loadCounters: PropTypes.func,
  counters: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  loading: PropTypes.bool,
  addCounterItem: PropTypes.func,
  deleteCounterItem: PropTypes.func,
  increment: PropTypes.func,
};

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addCounterItem = this.addCounterItem.bind(this);
  }
  componentDidMount() {
    this.props.loadCounters();
  }
  addCounterItem(title = '') {
    this.props.addCounterItem(title);
  }
  render() {
    return (
      <MainWrapper>
        <CounterForm addCounterItem={this.props.addCounterItem} />
        <AppList>
          {this.props.counters.map(item => {
             return (
               <CounterItem
                 key={item.id}
                 item={item}
                 deleteItem={this.props.deleteCounterItem}
                 increment={this.props.increment}
                 decrement={this.props.decrement}
               />);
          })}
        </AppList>
        <CounterTotal counters={this.props.counters} />
      </MainWrapper>
    );
  }
}

CounterContainer.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  loadCounters: () => dispatch(loadCounters()),
  addCounterItem: title => dispatch(addCounterItem(title)),
  deleteCounterItem: id => dispatch(deleteCounterItem(id)),
  increment: id => dispatch(increment(id)),
  decrement: id => dispatch(decrement(id)),
});

export default connect(createSelector(
  counterDataSelector(),
  loadingSelector(),
  (counters, loading) => ({ counters, loading }),
), mapDispatchToProps)(CounterContainer);
