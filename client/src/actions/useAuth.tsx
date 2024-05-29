import { Endpoints } from "../services/httpendpoints";
import apiClient from "../services/httpservices";

export const  getLoginApiCall = async ( data: any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.userLogin}`,data)
  return response;
};

export const  getUserSignUp = async ( data:{ name:string,email:string,password:string}): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.userSignUp}`,data)
  return response;
};