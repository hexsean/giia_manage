import { authApi } from './api/modules/auth';
import { userApi } from './api/modules/user';

export const services = {
    auth: authApi,
    user: userApi
};

export default services;
