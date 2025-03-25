// src/stores/modules/auth.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import services from '@/services';
import router from '@/router';
import type { LoginRequest, LoginResponse } from '@/services/api/types/auth';

export const useAuthStore = defineStore('auth', () => {
    // 状态
    const token = ref<string | null>(localStorage.getItem('token'));
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    // 计算属性
    const isAuthenticated = computed(() => !!token.value);

    // 方法
    async function login(credentials: LoginRequest) {
        isLoading.value = true;
        error.value = null;

        try {
            const response: LoginResponse = await services.auth.login(credentials);

            // 保存令牌到本地存储和内存状态
            token.value = response.token;
            localStorage.setItem('token', response.token);

            // 重定向到主页或预期目标
            const redirectPath = router.currentRoute.value.query.redirect as string || '/';
            router.push(redirectPath);

            return true;
        } catch (err: any) {
            error.value = '登录失败，请检查您的凭据';
            console.error('Login error:', err);
            return false;
        } finally {
            isLoading.value = false;
        }
    }

    async function logout() {
        try {
            // 可选：调用后端注销API
            if (isAuthenticated.value) {
                await services.auth.logout();
            }
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            // 无论后端调用是否成功，都清除本地状态
            token.value = null;
            localStorage.removeItem('token');

            // 重定向到登录页
            router.push('/login');
        }
    }

    function clearError() {
        error.value = null;
    }

    return {
        // 状态
        token,
        isLoading,
        error,

        // 计算属性
        isAuthenticated,

        // 方法
        login,
        logout,
        clearError
    };
});
