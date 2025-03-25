export interface User {
    id: number;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export interface UpdateUserRequest {
    firstName?: string;
    lastName?: string;
    email?: string;
}

export interface UpdatePasswordRequest {
    currentPassword: string;
    newPassword: string;
}
