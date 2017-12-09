import { fromJS } from 'immutable';

import {
  LOAD_COUNTERS,
  LOAD_COUNTERS_SUCCESS,
} from './constants';

const initialState = fromJS({
  counters: [],
  loading: true,
});

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_COUNTERS_SUCCESS:
      return state
        .set('counters', action.counters)
       .set('loading', false);
    case LOAD_COUNTERS:
      return state
        .set('loading', true);
    default:
      return state;
  }
}

export default counterReducer;
