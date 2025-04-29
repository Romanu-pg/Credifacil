import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const LoginRedirect = () => {
    const { isUser } = useSelector((state) => state.auth);

    return (
        isUser ? <Navigate to='/products' replace /> : <Outlet />
    );

};


export default LoginRedirect;