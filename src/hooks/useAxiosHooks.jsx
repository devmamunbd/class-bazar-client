import axios from 'axios'
import { useEffect } from 'react'

const useAxiosHooks = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:7000/"
    })



    // axios interceptors
    useEffect(()=> {

        /// request interceptor
        const requestInterceptor = axios.interceptors.request.use((config) => {
            return config;
        }, function(error) {
          return Promise.reject(error)
        })

        //response interceptor
        const responseInterceptors = axios.interceptors.response.use((response)=> {
            return response;
        }, function(error) {
            return Promise.reject(error)
        });


        return ()=> {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.request.eject(responseInterceptors);
        }

    },[axiosInstance])

  return axiosInstance;
}

export default useAxiosHooks
