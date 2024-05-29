import { Config } from '../config/config';

export const Endpoints = {
  userSignUp: `${Config.BASE_API_URL}/api/auth/registerUser`,

  userLogin: `${Config.BASE_API_URL}/api/auth/login`,





  

  createUserApi: `${Config.BASE_API_URL}/users`,

  createSchool: `${Config.BASE_API_URL}/schools/self`,

  school:`${Config.BASE_API_URL}/schools`,

  getSchoolData: `${Config.BASE_API_URL}/schools/self`,

  getCategories: `${Config.BASE_API_URL}/categories`,

  getSchoolDetailsById: `${Config.BASE_API_URL}/schools/id`,

  getSchoolImages: `${Config.BASE_API_URL}/schools/document`,

  getSchoolImagesByS3Bucket: `${process.env.REACT_APP_URL_IMAGE_BASE_URL}`,

  getUser: `${Config.BASE_API_URL}/user/`,

  blogs: `${Config.BASE_API_URL}/posts`,

  getPostBySchoolId: `${Config.BASE_API_URL}/schools/posts`,

  getMyPostBySchoolId: `${Config.BASE_API_URL}/schools/my-blogs`,

  restorePost: `${Config.BASE_API_URL}/posts/restore`,

  monetizationBlogs: `${Config.BASE_API_URL}/school-advertisements`,

  updateMonetizationBlogs: `${Config.BASE_API_URL}/school-advertisements/update`,

  uploadImage: `${Config.BASE_API_URL}/posts/img/upload`,

};
