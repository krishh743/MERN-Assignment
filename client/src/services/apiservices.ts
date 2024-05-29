import { Endpoints } from './httpendpoints';
import apiClient from './httpservices';

export const createUserApi = async (data: any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.createUserApi}`, data);
  return response;
};

export const getAlluserApi = async (): Promise<any> => {
  const response = await apiClient.get(`${Endpoints.createUserApi}`);
  return response;
};

export const updateUserInfoApi = async (id: number): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.createUserApi}/${id}}`);
  return response;
};

export const deleteUserInfoApi = async (id: number): Promise<any> => {
  const response = await apiClient.delete(`${Endpoints.createUserApi}/${id}`);

  return response;
};

export const createSchoolApi = async (data: any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.createSchool}`, data);
  return response;
};

export const editSchoolDetailsApi = async (data: any,id:any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.school}/${id}`, data);
  return response;
};

export const deleteSchoolApi = async (id: number): Promise<any> => {
  const response = await apiClient.delete(`${Endpoints.school}/${id}`);
  console.log(response,"api")
  return response;
};

export const getCategoriesApi = async (): Promise<any> => {
  const response = await apiClient.get(`${Endpoints.getCategories}`);
  return response;
};

export const getAllSchoolListApi = async (): Promise<any> => {
  const response = await apiClient.get(`${Endpoints.getSchoolData}`);
  return response;
};

export const userInfoApi = async (): Promise<any> => {
  const response = await apiClient.get(`${Endpoints.getUser}`);
  return response;
};

export const getSchooldetailsById = async (id: string): Promise<any> => {
  const response = await apiClient.get(
    `${Endpoints.getSchoolDetailsById}/${id}`
  );
  return response;
};

export const createBlogsApi = async (data: any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.blogs}`, data);
  return response;
};
export const editBlogsApi = async (id: string, data: any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.blogs}/${id}`, data);
  return response;
};

export const draftBlogsApi = async (data: any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.blogs}`, data);
  return response;
};

export const getMyBlogBySchoolIdApi = async (
  id: string | undefined,
  data: any
): Promise<any> => {
  const response = await apiClient.get(
    `${Endpoints.getMyPostBySchoolId}/${id}`,
    {
      params: data, // Use params to pass data for GET requests
    }
  );
  return response;
};

export const deleteMyBlogBySchoolIdApi = async (id: number): Promise<any> => {
  const response = await apiClient.delete(`${Endpoints.blogs}/${id}`);
  return response;
};

export const restorePostApi = async (id: number): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.restorePost}/${id}`);
  return response;
};

export const editMyBlogBySchoolIdApi = async (id: string): Promise<any> => {
  const response = await apiClient.get(`${Endpoints.blogs}/${id}`);
  return response;
};

export const monetizationBlogsApi = async (data: any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.monetizationBlogs}`, data);
  return response;
};

export const UpdatemonetizationApi = async (
  id: number,
  data: any
): Promise<any> => {
  const response = await apiClient.post(
    `${Endpoints.updateMonetizationBlogs}/${id}`,
    data
  );
  return response;
};

export const statusUpdateForMonetizationApi = async (
  id: number,
  data: any
): Promise<any> => {
  const response = await apiClient.post(
    `${Endpoints.updateMonetizationBlogs}/${id}`,
    data
  );
  return response;
};

export const uploadImage = async (data: any): Promise<any> => {
  const response = await apiClient.post(`${Endpoints.uploadImage}`, data);

  console.log(response, 'responseAll');
  return response;
};
