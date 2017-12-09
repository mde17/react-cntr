import { createSelector } from 'reselect';

export const counterSelector = () => state => state.get('counters');

export const counterDataSelector = () => createSelector(
  counterSelector(),
  (counters) => {
    return counters.get('counters');
  },
);
export const loadingSelector = () => createSelector(
  counterSelector(),
  (counters) => {
    return counters.get('loading');
  },
);
