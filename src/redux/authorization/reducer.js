import { createReducer } from '@reduxjs/toolkit';

import {
  actionSignInSuccess,
  actionSignInError,
  actionSignOutSuccess,
  actionSignOutError,
} from './actions.js';

const reducerSignInAndOut = createReducer(
  { name: '', token: '', email: '' },
  {
    [actionSignInSuccess]: (_, { payload }) => {
      return payload;
    },
    [actionSignInError]: ({ email }) => {
      return { name: '', token: '', email };
    },
    [actionSignOutSuccess]: ({ email }, _) => {
      return { name: '', token: '', email };
    },
    [actionSignOutError]: ({ email }) => {
      return { name: '', token: '', email };
    },
  },
);

export default reducerSignInAndOut;
