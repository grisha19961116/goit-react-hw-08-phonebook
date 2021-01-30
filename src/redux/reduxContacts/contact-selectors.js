import { createSelector } from 'reselect';
const getContact = state => state;
const getContactMemo = createSelector([getContact], contacts => contacts);
export { getContactMemo };
