import { AxiosRequestConfig } from 'axios';

export type ApiResponse<DataType> = {
  status: number;
} & DataType;

export const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: 'https://api.github.com',
};
