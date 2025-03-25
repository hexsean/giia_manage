import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
    // 设置文档标题
    document.title = `${to.meta.title || '应用'} | 团险智能助手`;
    console.log(`from.query : ${from.query}`)
    // 检查路由是否需要认证
    if (to.meta.requiresAuth) {
        // 检查用户是否已认证（这里是简单示例）
        const isAuthenticated = localStorage.getItem('token') !== null;

        if (!isAuthenticated) {
            // 重定向到登录页
            next({ name: 'Login', query: { redirect: to.fullPath } });
            return;
        }
    }

    next();
});

export default router;
