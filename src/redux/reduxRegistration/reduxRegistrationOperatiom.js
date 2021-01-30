import {
  actionAddNewUserError,
  actionAddNewUserSuccess,
} from './reduxRegistrationAction';
import { postRegistUser } from 'data/api-contacts';
import { handle } from 'managerToken/token';

const asyncRegistNewUser = newUser => async dispatch => {
  try {
    const { token } = await postRegistUser(newUser);
    handle.setToken(token);
    dispatch(actionAddNewUserSuccess(true));
  } catch (error) {
    dispatch(actionAddNewUserError(false));
  }
};

export default asyncRegistNewUser;
