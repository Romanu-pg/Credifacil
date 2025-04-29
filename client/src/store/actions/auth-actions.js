// import axios from "axios";
import api from "../../utils/api";
import { authActions } from '../auth-slice';
import { uiActions } from "../ui-slice";


export const login = (payload) => {
    return async dispatch => {
        dispatch(uiActions.loginLoading());
        //await api.get('/sanctum/csrf-cookie');

        const postData = async () => {
            const response = await api.post("/api/login", payload);

            const data = await response.data;
            return data;
        };

        try {
            var role = "user";
            console.log(payload);
            if(payload.email == "admin@admin.com")
            {
                role = "admin";
            }
            
            const user = {
                "user" : "saulmisaelcolli@gmail.com",
                "token" : "asjdsaidsaudada",
                "role" : role
            };

            await dispatch(authActions.login(user));
            console.log("holaaa mundoooo");
            dispatch(uiActions.loginLoading());
        } catch (error) {
            console.log(error);
        }
    }
};




export const register = (payload) => {
    return async dispatch => {
        dispatch(uiActions.registerLoading())
        await api.get('/sanctum/csrf-cookie');

        const postData = async () => {
            const response = await api.post("/api/register", payload);

            const data = await response.data;
            return data;
        };

        try {
            const user = await postData();
            await dispatch(authActions.register(user));
            dispatch(uiActions.registerLoading());
        } catch (error) {
            console.log(error);
        }
    }
};


export const logout = (token) => {
    return async dispatch => {
        //await api.get('/sanctum/csrf-cookie');

        const logout = async () => {
            // const response = await api.post('/api/logout', null, {
            //     headers: {
            //         Authorization: 'Bearer ' + token
            //     },
            //     // withCredentials: true
            // });
            const message = "salida exitosa";
            return message;
        };

        try {
            await logout();
            dispatch(authActions.logout());
            
        } catch (error) {
            console.log(error);
        }

    }
};
