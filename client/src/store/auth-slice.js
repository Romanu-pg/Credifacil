import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: false,
    user: null,
    isAdmin: false,
    isUser: false,
    token: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const user = action.payload;
            console.log("hola munditotototototo");
            console.log(user);
            console.log(action.payload.token);
            state.user = user;
            state.token = action.payload.token;
            state.isAuthenticated = true
            if (user.role === 'admin') {
                console.log("si esadmiiiiiiiiiiiiiiiiiiiiiiiiin");
                state.isAdmin = true;
            }else
            {
                state.isUser = true;
            }
        },
        register(state, action) {
            const user = action.payload.user;
            state.user = user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.isAdmin = false;
        },
        logout(state) {
            // state = initialState;
            Object.assign(state, initialState);
        }
    }
});



export const authActions = authSlice.actions;

export default authSlice;