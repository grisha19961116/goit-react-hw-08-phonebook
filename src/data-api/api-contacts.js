const axios = require('axios');
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const postRegistUser = async newUser => {
  const { data } = await axios.post(`/users/signup`, newUser);
  return data;
};
const postSignInUser = async credentials => {
  const { data } = await axios.post(`/users/login`, credentials);
  return data;
};
const postSignOut = async () => await axios.post(`/users/logout`);

const postAddNewContact = async contact =>
  await axios.post(`/contacts`, contact);

const deleteContact = async id => await axios.delete(`/contacts/${id}`);

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
  deleteContact,
};
