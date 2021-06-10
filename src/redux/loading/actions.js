import { createAction } from '@reduxjs/toolkit';

const actionIsLoading = createAction('contacts/loading', flag => ({
  payload: flag,
}));

export { actionIsLoading };
