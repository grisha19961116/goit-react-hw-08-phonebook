import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  actionAddContact,
  actionRemoveContact,
  actionSetFilter,
  actionSetToken,
  actionGetContactsSuccess,
  actionContactError,
  actionContactRequestStatus,
} from './reduxActions';

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

const reducerFilter = createReducer('', {
  [actionSetFilter]: (_, { payload }) => payload,
});
const reducerLoading = createReducer('', {
  [actionContactRequestStatus]: (_, { payload }) => payload,
});
const reducerToken = createReducer([], {
  [actionSetToken]: (state, { payload }) => {
    console.log(state);
    return payload;
  },
});

const contactPersistConfig = {
  key: 'token',
  storage: storage,
};

export const rootReducer = combineReducers({
  items: reducerContacts,
  filter: reducerFilter,
  isLoading: reducerLoading,
  token: persistReducer(contactPersistConfig, reducerToken),
});
