import { createReducer } from '@reduxjs/toolkit';
import {
  actionAddContact,
  actionRemoveContact,
  actionContactRequestStatus,
  actionGetContactsSuccess,
  actionContactError,
} from './contactsAction.js';

const reducerContacts = createReducer([], {
  [actionAddContact]: (state, { payload }) => {
    const itemsAdd = [...state, payload];
    return itemsAdd;
  },
  [actionRemoveContact]: (state, { payload }) => {
    const itemsRemove = [...state.filter(contact => contact.id !== payload)];
    return itemsRemove;
  },
  [actionGetContactsSuccess]: (state, { payload }) => {
    return payload;
  },
  [actionContactError]: (state, { payload }) => {
    return payload;
  },
});
export default reducerContacts;
