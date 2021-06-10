import { actionGetContacts } from './actions';
import { actionIsLoading } from '../loading/actions';
import { getAllContactsUser } from 'data-api/api-contacts';

const asyncOperationGetContacts = () => async dispatch => {
  try {
    dispatch(actionIsLoading(true));
    const data = await getAllContactsUser();
    dispatch(actionGetContacts(data));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(actionIsLoading(false));
  }
};

export { asyncOperationGetContacts };
