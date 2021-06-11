import { toast } from 'react-toastify';
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

const asyncSignOut = name => async dispatch => {
  let check = null;
  try {
    await postSignOut();
    handleAxios.removeToken();
    dispatch(actionSignOutSuccess());
    check = true;
  } catch (err) {
    check = false;
    dispatch(actionSignOutError());
  } finally {
    check === true &&
      toast.info(`👋 Goodby darling <<${name}>> !`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    check === false &&
      toast.error('🚀 Server error!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
};

const asyncSignIn = credentials => async dispatch => {
  let userName = null;
  try {
    const {
      token,
      user: { name, email },
    } = await postSignInUser(credentials);
    handleAxios.setToken(token);
    dispatch(actionSignInSuccess({ name, token, email }));
    userName = name;
  } catch (err) {
    userName = null;
    dispatch(actionSignInError());
  } finally {
    userName &&
      toast.success(`🤟 Hello darling <<${userName}>> !`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    !userName &&
      toast.error('🚀 Wrong credentials!', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
};

const asyncRegistNewUser = user => async dispatch => {
  const { name, email } = user;
  try {
    const { token } = await postRegistUser(user);
    handleAxios.setToken(token);
    dispatch(actionSignInSuccess({ name, token, email }));
    toast.success(`🦄 Hello darling ${name} !`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    dispatch(actionSignInError());
    toast.warn(`⚠️${email} Is right email?`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export { asyncSignIn, asyncSignOut, asyncRegistNewUser };
