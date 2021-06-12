import { createReducer } from '@reduxjs/toolkit';
import {
  actionAddContact,
  actionRemoveContact,
  actionUpdateContact,
  actionGetContacts,
} from './actions.js';

const reducerContacts = createReducer([], {
  [actionUpdateContact]: (state, { payload }) => {
    let index;
    state.find((contact, i) => {
      if (contact.id === payload.id) index = i;
    });
    const contactUpdate = [...state];
    contactUpdate[index] = payload;
    return contactUpdate;
  },
  [actionAddContact]: (state, { payload }) => {
    const contactsAdd = [...state, payload];
    return contactsAdd;
  },
  [actionRemoveContact]: (state, { payload }) => {
    const contactsRemove = [...state.filter(contact => contact.id !== payload)];
    return contactsRemove;
  },
  [actionGetContacts]: (_, { payload }) => {
    return payload;
  },
});

export default reducerContacts;
