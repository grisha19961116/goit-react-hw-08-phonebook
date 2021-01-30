import { createAction } from '@reduxjs/toolkit';
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

export {
  actionSetFilter,
  actionContactRequestStatus,
  actionGetContactsSuccess,
  actionContactError,
};
