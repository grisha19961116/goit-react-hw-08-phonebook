import {
  actionSignInSuccess,
  actionSignInError,
  actionSignOutSuccess,
  actionSignOutError,
} from './actions.js';
import {
  postSignInUser,
  postSignOut,
  postRegistUser,
} from 'data-api/api-contacts';

import { handleAxios } from 'managerToken/token';

const asyncSignOut = () => async dispatch => {
  try {
    await postSignOut();
    handleAxios.removeToken();
    dispatch(actionSignOutSuccess());
  } catch (err) {
    dispatch(actionSignOutError());
  }
};

const asyncSignIn = credentials => async dispatch => {
  try {
    const {
      token,
      user: { name, email },
    } = await postSignInUser(credentials);
    handleAxios.setToken(token);
    dispatch(actionSignInSuccess({ name, token, email }));
  } catch (error) {
    dispatch(actionSignInError());
  }
};

const asyncRegistNewUser = newUser => async dispatch => {
  try {
    const { token } = await postRegistUser(newUser);
    handleAxios.setToken(token);
    const { name, email } = newUser;
    dispatch(actionSignInSuccess({ name, token, email }));
  } catch (error) {
    dispatch(actionSignInError());
  }
};

export { asyncSignIn, asyncSignOut, asyncRegistNewUser };
