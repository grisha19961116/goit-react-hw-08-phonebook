import {
  actionContactRequestStatus,
  actionGetContactsSuccess,
  actionContactError,
} from './reduxActions';
import { asyncGetContacts } from '../data/api-contacts';
const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000';

const asyncOperationGetContacts = () => async dispatch => {
  try {
    dispatch(actionContactRequestStatus('request'));
    const data = await asyncGetContacts();
    dispatch(actionGetContactsSuccess(data));
  } catch (error) {
    dispatch(actionContactError([]));
    dispatch(actionContactRequestStatus('error'));
  } finally {
    dispatch(actionContactRequestStatus('success'));
  }
};

export { asyncOperationGetContacts };
