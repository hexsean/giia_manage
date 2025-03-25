export const env = {
    /**
     * 当前环境名称
     */
    mode: import.meta.env.MODE,

    /**
     * 应用名称
     */
    appName: import.meta.env.VITE_APP_NAME,

    /**
     * API基础URL
     */
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,

    /**
     * 应用环境
     */
    appEnv: import.meta.env.VITE_APP_ENV,

    /**
     * 是否为开发环境
     */
    isDev: import.meta.env.DEV,

    /**
     * 是否为生产环境
     */
    isProd: import.meta.env.PROD,

    /**
     * 是否使用API Mock
     */
    isApiMock: import.meta.env.VITE_API_MOCK === 'true',
};

export default env;
