import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./constants";

export type Api = {
  base: AxiosInstance;
};

export const Http: Api = {
  base: axios.create({
    baseURL: BASE_URL
  })
};
