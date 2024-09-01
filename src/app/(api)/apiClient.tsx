import axios from 'axios';

type Props = {
  baseURL?: string;
  headers?: {};
};

export const customApiClient = ({
  baseURL = 'localhost:8000',
  headers = {},
}: Props) => {
  const customHeader = {
    ...headers,
    ...{ 'Content-Type': 'application/json' },
  };

  const apiClient = axios.create({
    baseURL,
    responseType: 'json',
    headers: customHeader,
  });

  apiClient.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  return apiClient;
};
