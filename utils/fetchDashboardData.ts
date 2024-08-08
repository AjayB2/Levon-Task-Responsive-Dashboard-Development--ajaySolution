import api from '../api';

const fetchDashboardData = async () => {
  const response = await api.get('/dashboard');
  return response.data;
};

export default fetchDashboardData;