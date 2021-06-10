import { createAction } from '@reduxjs/toolkit';

const actionSignInSuccess = createAction('signIn/success', value => ({
  payload: value,
}));
const actionSignInError = createAction('signIn/error', value => ({
  payload: value,
}));
const actionSignOutSuccess = createAction('signOut/success', value => ({
  payload: value,
}));
const actionSignOutError = createAction('signOut/error', value => ({
  payload: value,
}));

export {
  actionSignInSuccess,
  actionSignInError,
  actionSignOutSuccess,
  actionSignOutError,
};
