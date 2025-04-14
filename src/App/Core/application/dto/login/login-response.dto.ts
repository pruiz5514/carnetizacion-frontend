export interface ILoginResponse {
    message: string;
    user:    User;
    token:   string;
}

export interface User {
    id:    string;
    email: string;
    role:  string;
}
