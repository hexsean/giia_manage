// src/router/routes.ts
import { RouteRecordRaw } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/home/HomePage.vue'),
                meta: {
                    title: '首页',
                    requiresAuth: true,
                },
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/about/AboutPage.vue'),
                meta: {
                    title: '关于',
                    requiresAuth: true,
                },
            },
        ]
    },
    {
        path: '/',
        component: BlankLayout,
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/auth/LoginPage.vue'),
                meta: {
                    title: '登录',
                    requiresAuth: false,
                }
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'NotFound',
                component: () => import('@/views/error/NotFoundPage.vue'),
                meta: {
                    title: '404 - 页面未找到',
                    layout: 'BlankLayout',
                },
            }
        ]
    }
];

export default routes;
