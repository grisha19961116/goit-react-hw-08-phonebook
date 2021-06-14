const axios = require('axios');
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const postRegistUser = async user => {
  const { data } = await axios.post(`/users/signup`, user);
  return data;
};
const postSignInUser = async credentials => {
  const { data } = await axios.post(`/users/login`, credentials);
  return data;
};
const postSignOut = async () => await axios.post(`/users/logout`);

const postAddNewContact = async contact => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};

const deleteContact = async id => await axios.delete(`/contacts/${id}`);

const postUpdateContact = async (id, contact) => {
  const { data } = await axios.patch(`/contacts/${id}`, contact);
  return data;
};
const getAllContactsUser = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export {
  postRegistUser,
  postSignInUser,
  postSignOut,
  getAllContactsUser,
  postAddNewContact,
  postUpdateContact,
  deleteContact,
};
