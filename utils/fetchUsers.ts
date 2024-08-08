import api from '../api';

const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export default fetchUsers;