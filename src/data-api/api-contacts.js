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
const postSignOut = async () => {
  await axios.post(`/users/logout`);
};
const postAddNewContact = async contact => {
  const data = await axios.post(`/contacts`, contact);
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
