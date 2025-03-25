import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import env from '@/utils/env';

// Axios实例
const http: AxiosInstance = axios.create({
    baseURL: env.apiBaseUrl,
    timeout: env.isProd ? 15000 : 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// 请求拦截器
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 从localStorage获取身份验证令牌
        const token = localStorage.getItem('token');

        // 如果令牌存在，添加到请求头
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    (response: AxiosResponse) => {
        // 直接返回响应数据
        return response.data;
    },
    (error) => {
        // 错误处理
        if (error.response) {
            // 服务器返回的错误
            const { status } = error.response;

            // 处理401未授权错误（令牌过期等）
            if (status === 401) {
                localStorage.removeItem('token');
                // 可以重定向到登录页
                window.location.href = '/login';
            }

            // 可以添加更多常见错误的处理
            console.error(`API错误: ${status}`, error.response.data);
        } else if (error.request) {
            // 请求已发出但没有收到响应
            console.error('网络错误，未收到响应', error.request);
        } else {
            // 设置请求时发生错误
            console.error('请求错误', error.message);
        }

        return Promise.reject(error);
    }
);

export default http;
