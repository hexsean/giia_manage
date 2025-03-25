import http from '@/services/http.ts';
import {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse
} from '../types/auth';

export const authApi = {
    /**
     * 用户登录
     */
    login: (data: LoginRequest): Promise<LoginResponse> => {
        return http.post('/auth/login', data);
    },

    /**
     * 用户注册
     */
    register: (data: RegisterRequest): Promise<RegisterResponse> => {
        return http.post('/auth/register', data);
    },

    /**
     * 退出登录
     */
    logout: (): Promise<void> => {
        return http.post('/auth/logout');
    }
};
