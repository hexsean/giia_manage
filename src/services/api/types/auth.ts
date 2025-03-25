export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: number;
        username: string;
        email: string;
        role: string;
    };
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}

export type RegisterResponse = LoginResponse;
