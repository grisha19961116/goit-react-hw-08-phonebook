import { createAction } from '@reduxjs/toolkit';
const actionAddContact = createAction('items/add', newContact => ({
  payload: newContact,
}));
const actionRemoveContact = createAction('items/remove', id => ({
  payload: id,
}));

const actionContactRequestStatus = createAction('items/request', flag => ({
  payload: flag,
}));
const actionGetContactsSuccess = createAction('items/success', contacts => ({
  payload: contacts,
}));
const actionContactError = createAction('items/error', value => ({
  payload: value,
}));

export {
  actionAddContact,
  actionRemoveContact,
  actionContactRequestStatus,
  actionGetContactsSuccess,
  actionContactError,
};
