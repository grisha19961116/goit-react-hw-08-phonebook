const axios = require('axios');
export const handle = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  removeToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};
