import axios, { AxiosInstance } from "axios";

 export const Api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
})

