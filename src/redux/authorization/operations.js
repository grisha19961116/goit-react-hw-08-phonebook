import { toast } from 'react-toastify';
import { actionIsLoading } from '../loading/actions';
import { actionSignInSuccess, actionSignOutSuccess } from './actions.js';
import {
  postSignInUser,
  postSignOut,
  postRegistUser,
} from 'data-api/api-contacts';

import { handleAxios } from 'managerToken/token';

const initialState = { name: '', token: '', email: '' };

const asyncSignOut = name => async dispatch => {
  let check = null;
  try {
    await postSignOut();
    handleAxios.removeToken();
    dispatch(actionSignOutSuccess());
    check = true;
  } catch (err) {
    check = false;
    dispatch(actionSignOutSuccess(initialState));
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
    dispatch(actionIsLoading(true));
    const {
      token,
      user: { name, email },
    } = await postSignInUser(credentials);
    handleAxios.setToken(token);
    dispatch(actionSignInSuccess({ name, token, email }));
    userName = name;
  } catch (err) {
    userName = null;
    dispatch(actionSignInSuccess(initialState));
  } finally {
    dispatch(actionIsLoading(false));
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

const asyncRegistrationNewUser = user => async dispatch => {
  const { name, email } = user;

  try {
    dispatch(actionIsLoading(true));
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
    dispatch(actionSignInSuccess(initialState));
    toast.warn(`⚠️${email} Is right email?`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } finally {
    dispatch(actionIsLoading(false));
  }
};

export { asyncSignIn, asyncSignOut, asyncRegistrationNewUser };
