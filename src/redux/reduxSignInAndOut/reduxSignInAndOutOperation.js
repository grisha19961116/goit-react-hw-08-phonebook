import {
  actionSignInSuccess,
  actionSignInError,
  actionSignOutSuccess,
  actionSignOutError,
} from './reduxSignInAndOut.js';
import { postSignInUser, postSignOut } from 'data-api/api-contacts';

import { handle } from 'managerToken/token';
const asyncSignIn = newUser => async dispatch => {
  try {
    const {
      user: { name },
      token,
    } = await postSignInUser(newUser);
    handle.setToken(token);

    dispatch(actionSignInSuccess({ name, token }));
  } catch (error) {
    dispatch(actionSignInError({ name: '', token: '' }));
  }
};
const asyncSignOut = newUser => async dispatch => {
  try {
    await postSignOut();
    handle.removeToken();

    dispatch(actionSignOutSuccess({ name: '', token: '' }));
  } catch (error) {
    console.log(error);
    dispatch(actionSignOutError({ name: '', token: '' }));
  }
};
export { asyncSignIn, asyncSignOut };
