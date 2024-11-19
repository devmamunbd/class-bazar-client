
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import axios from 'axios';
import { useEffect } from 'react';



const useAxiosSecure = () => {
    const {LogOut} = useAuth();
    const navigate = useNavigate()


    const axiosSecure = axios.create({
        baseURL: 'http://localhost:7000',
    });

    useEffect(()=> {
        // Add a request interceptor

       const requestInterceptor = axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
        });

        // Add a response interceptor
       const responseInterceptor = axiosSecure.interceptors.response.use((response)=> response, async(error)=> {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await LogOut();
            navigate('/login')
            throw error;
        }
        throw error;
       });
       return ()=> {
        axiosSecure.interceptors.request.eject(requestInterceptor);
        axiosSecure.interceptors.response.eject(responseInterceptor);
       }

    },[LogOut, axiosSecure, navigate])
    return axiosSecure;
}

export default useAxiosSecure
