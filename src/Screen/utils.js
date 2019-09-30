import axios from "axios";
import { get } from "lodash";

export const makeRequest = async (url, dataPath, successCb, errorCb, method = 'GET', data = {}) => {
  try {
    const requestUrl = `http://localhost:3002/transactions/${url}`;
    let axiosInstance = null
    switch (method) {
      case 'GET':
        axiosInstance = axios.get
        break;
      case 'POST':
          axiosInstance = axios.post
          break;
    
      default:
        axiosInstance = axios.get
        break;
    }
    const response = await axiosInstance(requestUrl, { ...data });

    if (response.status === 200) {
      const suspiciousList = get(response, `data.${dataPath}`, {});
      successCb(suspiciousList);
    }
  } catch (error) {
    errorCb(error)
  }
};
