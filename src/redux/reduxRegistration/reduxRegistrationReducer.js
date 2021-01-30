import { createReducer } from '@reduxjs/toolkit';
import {
  actionAddNewUserError,
  actionAddNewUserSuccess,
} from './reduxRegistrationAction';
const reducerRegistration = createReducer(false, {
  [actionAddNewUserSuccess]: (state, { payload }) => {
    return payload;
  },
  [actionAddNewUserError]: (state, { payload }) => {
    return payload;
  },
});

export default reducerRegistration;
