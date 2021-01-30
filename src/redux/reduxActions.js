import { createAction } from '@reduxjs/toolkit';
const actionAddContact = createAction('items/add', newContact => ({
  payload: newContact,
}));
const actionRemoveContact = createAction('items/remove', id => ({
  payload: id,
}));
const actionSetFilter = createAction('filter/addFilter', filter => ({
  payload: filter,
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
const actionSetToken = createAction('token/setToLocalStorage');
// Напиши Redux-операции для работы с асинхронными запросами по паттерну request, success и error.
export {
  actionSetToken,
  actionAddContact,
  actionRemoveContact,
  actionSetFilter,
  actionContactRequestStatus,
  actionGetContactsSuccess,
  actionContactError,
};
