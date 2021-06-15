import { createReducer } from '@reduxjs/toolkit';

import { actionSignInSuccess, actionSignOutSuccess } from './actions.js';

const reducerSignInAndOut = createReducer(
  { name: '', token: '', email: '' },
  {
    [actionSignInSuccess]: (_, { payload }) => {
      return payload;
    },

    [actionSignOutSuccess]: ({ email }, _) => {
      return { name: '', token: '', email };
    },
  },
);

export default reducerSignInAndOut;
