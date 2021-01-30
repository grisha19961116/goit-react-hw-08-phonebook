import {
  actionContactRequestStatus,
  actionGetContactsSuccess,
  actionContactError,
} from '../reduxActions';
import { getAllContactsUser } from 'data/api-contacts';

const asyncOperationGetContacts = () => async dispatch => {
  try {
    dispatch(actionContactRequestStatus('request'));
    const data = await getAllContactsUser();
    dispatch(actionGetContactsSuccess(data));
  } catch (error) {
    dispatch(actionContactError([]));
    dispatch(actionContactRequestStatus('error'));
  } finally {
    dispatch(actionContactRequestStatus('success'));
  }
};

export { asyncOperationGetContacts };
