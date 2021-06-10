import { createAction } from '@reduxjs/toolkit';

const actionAddContact = createAction('contacts/add', newContact => ({
  payload: newContact,
}));
const actionRemoveContact = createAction('contacts/remove', id => ({
  payload: id,
}));

const actionGetContacts = createAction('contacts/get', contacts => ({
  payload: contacts,
}));

export { actionAddContact, actionRemoveContact, actionGetContacts };
