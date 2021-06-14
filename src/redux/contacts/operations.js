import { toast } from 'react-toastify';
import {
  actionAddContact,
  actionRemoveContact,
  actionUpdateContact,
  actionGetContacts,
} from './actions';

import { actionIsLoading } from '../loading/actions';

import {
  getAllContactsUser,
  postAddNewContact,
  deleteContact,
  postUpdateContact,
} from 'data-api/api-contacts';

const errLogger = ({ message }) =>
  toast.error(`🚀 ${message}!`, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const asyncOperationGetContacts = () => async dispatch => {
  try {
    dispatch(actionIsLoading(true));
    const data = await getAllContactsUser();
    dispatch(actionGetContacts(data));
  } catch (err) {
    errLogger(err);
  } finally {
    dispatch(actionIsLoading(false));
  }
};

const asyncOperationAddContact = contact => async dispatch => {
  try {
    dispatch(actionIsLoading(true));
    const data = await postAddNewContact(contact);
    dispatch(actionAddContact(data));
  } catch (err) {
    errLogger(err);
  } finally {
    dispatch(actionIsLoading(false));
  }
};

const asyncOperationRemoveContact = id => async dispatch => {
  try {
    dispatch(actionIsLoading(true));
    await deleteContact(id);
    dispatch(actionRemoveContact(id));
  } catch (err) {
    errLogger(err);
  } finally {
    dispatch(actionIsLoading(false));
  }
};

const asyncOperationUpdateContact = (id, contact) => async dispatch => {
  try {
    dispatch(actionIsLoading(true));
    const data = await postUpdateContact(id, contact);
    dispatch(actionUpdateContact(data));
  } catch (err) {
    errLogger(err);
  } finally {
    dispatch(actionIsLoading(false));
  }
};

export {
  asyncOperationGetContacts,
  asyncOperationAddContact,
  asyncOperationRemoveContact,
  asyncOperationUpdateContact,
};
