import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducerRegistration from './reduxRegistration/reduxRegistrationReducer';
import reducerSignInAndOut from './reduxSignInAndOut/reduxSignInAndOutReducer';
import reducerContacts from './reduxContacts/contactsReducer';
import { actionSetFilter, actionContactRequestStatus } from './reduxActions';

const reducerFilter = createReducer('', {
  [actionSetFilter]: (_, { payload }) => payload,
});
const reducerLoading = createReducer('', {
  [actionContactRequestStatus]: (_, { payload }) => payload,
});

const contactPersistConfig = {
  key: 'token',
  storage: storage,
};

export const rootReducer = combineReducers({
  items: reducerContacts,
  filter: reducerFilter,
  isLoading: reducerLoading,
  registration: reducerRegistration,
  logIn: persistReducer(contactPersistConfig, reducerSignInAndOut),
});
