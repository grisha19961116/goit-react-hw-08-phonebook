import { createAction } from '@reduxjs/toolkit';

const actionSetFilter = createAction('filter/addFilter', filter => ({
  payload: filter,
}));

export { actionSetFilter };
