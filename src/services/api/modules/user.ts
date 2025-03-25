import http from '@/services/http.ts';
import {
    User,
    UpdateUserRequest,
    UpdatePasswordRequest
} from '../types/user';

export const userApi = {
    /**
     * 获取当前用户信息
     */
    getCurrentUser: (): Promise<User> => {
        return http.get('/users/me');
    },

    /**
     * 更新用户信息
     */
    updateUser: (data: UpdateUserRequest): Promise<User> => {
        return http.put('/users/me', data);
    },

    /**
     * 更新密码
     */
    updatePassword: (data: UpdatePasswordRequest): Promise<void> => {
        return http.put('/users/me/password', data);
    }
};
