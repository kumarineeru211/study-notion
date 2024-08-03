import axios from "axios";
// const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
  
  withCredentials: true, // ensures credentials are included in every request
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
   
  });
};
