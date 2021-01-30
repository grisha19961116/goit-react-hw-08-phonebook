import { createAction } from '@reduxjs/toolkit';

const actionAddNewUserSuccess = createAction('addUser/success', value => ({
  payload: value,
}));
const actionAddNewUserError = createAction('addUser/error', value => ({
  payload: value,
}));
export { actionAddNewUserSuccess, actionAddNewUserError };
