import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: string | null;
    role: string | null;
    token: string | null;
    isAuthenticated: boolean;
}
  
const initialState: AuthState = {
    user: null,
    role: null,
    token: null,
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login: (state, action: PayloadAction<{user:string, role:string, token:string}>) => {
            state.user = action.payload.user;
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.isAuthenticated = true
        },
        logout: (state) =>{
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("persist:root");
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer