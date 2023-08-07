import axios, { AxiosError } from "axios";
import { BASE_URL } from "./constants";

const client = axios.create({ baseURL: BASE_URL });

const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = (response: any) => response;
  const onError = (error: AxiosError) => error;

  return client(options).then(onSuccess).catch(onError);
};

export default request;
