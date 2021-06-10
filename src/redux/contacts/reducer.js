import { createReducer } from '@reduxjs/toolkit';
import {
  actionAddContact,
  actionRemoveContact,
  actionGetContacts,
} from './actions.js';

const reducerContacts = createReducer([], {
  [actionAddContact]: (state, { payload }) => {
    const itemsAdd = [...state, payload];
    return itemsAdd;
  },
  [actionRemoveContact]: (state, { payload }) => {
    const itemsRemove = [...state.filter(contact => contact.id !== payload)];
    return itemsRemove;
  },
  [actionGetContacts]: (_, { payload }) => {
    return payload;
  },
});

export default reducerContacts;
