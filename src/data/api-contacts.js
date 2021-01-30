const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000';
const asyncGetContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

const postContacts = async postContact => {
  await axios.post(`/contacts`, postContact);
};
const deletePostContacts = async idContact => {
  await axios.delete(`/contacts/${idContact}`);
};

export { asyncGetContacts, postContacts, deletePostContacts };
