const axios = require('axios');
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const postRegistUser = async newUser => {
  const { data } = await axios.post(`/users/signup`, newUser);
  return data;
};
const postSignInUser = async privateData => {
  const { data } = await axios.post(`/users/login`, privateData);
  return data;
};
const postSignOut = async () => {
  await axios.post(`/users/logout`);
};
const postAddNewContact = async newContact => {
  console.log(newContact, `www`);
  const data = await axios.post(`/contacts`, newContact);
  console.log(data, `data`);
};
const deleteContact = async id => {
  console.log(id, `id`);
  const data = await axios.delete(`/contacts/${id}`);
  console.log(data, `data delete`);
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
  deleteContact,
};
