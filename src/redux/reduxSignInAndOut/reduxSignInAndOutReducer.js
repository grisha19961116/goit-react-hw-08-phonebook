import { createReducer } from '@reduxjs/toolkit';
import {
  actionSignInSuccess,
  actionSignInError,
  actionSignOutSuccess,
  actionSignOutError,
} from './reduxSignInAndOut.js';
const reducerSignInAndOut = createReducer(
  { name: '', token: '' },
  {
    [actionSignInSuccess]: (state, { payload }) => {
      return payload;
    },
    [actionSignInError]: (state, { payload }) => {
      return payload;
    },
    [actionSignOutSuccess]: (state, { payload }) => {
      return payload;
    },
    [actionSignOutError]: (state, { payload }) => {
      return payload;
    },
  },
);

export default reducerSignInAndOut;
