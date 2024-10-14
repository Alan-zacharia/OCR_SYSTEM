 import axiosInstance from "../api/api";

 export const uploadImageApi = (data, {
     headers
 }) => {
     return axiosInstance.post("/uploads", data, {
         headers
     })
 }