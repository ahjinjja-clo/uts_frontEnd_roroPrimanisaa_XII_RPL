import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Define API methods
const apiGet = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const apiPost = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

const apiPut = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

const apiDelete = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

// Example React component using the API methods
const ExampleComponent = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await apiGet('/example-endpoint');
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createData = async (newData) => {
    try {
      const result = await apiPost('/example-endpoint', newData);
      setData(result);
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const updateData = async (updatedData) => {
    try {
      const result = await apiPut('/example-endpoint', updatedData);
      setData(result);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteData = async () => {
    try {
      const result = await apiDelete('/example-endpoint');
      setData(result);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={() => createData({ key: 'value' })}>Create Data</button>
      <button onClick={() => updateData({ key: 'new value' })}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default ExampleComponent;
export { apiGet, apiPost, apiPut, apiDelete };
