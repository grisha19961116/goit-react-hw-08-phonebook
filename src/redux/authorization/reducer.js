import { createReducer } from '@reduxjs/toolkit';

import {
  actionSignInSuccess,
  actionSignInError,
  actionSignOutSuccess,
  actionSignOutError,
} from './actions.js';

const initialState = { name: '', token: '', email: '' };

const reducerSignInAndOut = createReducer(initialState, {
  [actionSignInSuccess]: (_, { payload }) => {
    return payload;
  },
  [actionSignInError]: () => initialState,
  [actionSignOutSuccess]: ({ email }, _) => {
    return { name: '', token: '', email };
  },
  [actionSignOutError]: () => initialState,
});

export default reducerSignInAndOut;
