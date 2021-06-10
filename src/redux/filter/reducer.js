import { createReducer } from '@reduxjs/toolkit';
import { actionSetFilter } from './actions.js';

const reducerFilter = createReducer('', {
  [actionSetFilter]: (_, { payload }) => payload,
});

export default reducerFilter;
