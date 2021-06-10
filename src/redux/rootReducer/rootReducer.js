import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducerAuthorization from '../authorization/reducer';
import reducerContacts from '../contacts/reducer';
import reducerFilter from '../filter/reducer';
import reducerLoading from '../loading/reducer';

const contactPersistConfig = {
  key: 'token',
  storage: storage,
};

export const rootReducer = combineReducers({
  contacts: reducerContacts,
  filter: reducerFilter,
  isLoading: reducerLoading,
  logIn: persistReducer(contactPersistConfig, reducerAuthorization),
});
