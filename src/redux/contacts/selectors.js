import { createSelector } from 'reselect';

const getContact = state => state.contacts;
const getState = state => state;
const getFilter = state => state.filter;
const getContactMemo = createSelector([getContact], contacts => contacts);

const getVisibleContactsMemo = createSelector(
  [getContact, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export { getContactMemo, getState, getVisibleContactsMemo };
