import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouteUser: React.FC = () => {
    const auth = { 'token': false }
    const user = localStorage.getItem('user');
    if (user === 'user' || user === 'admin') {
        auth.token = true
    } else {
        <Navigate to='/' />
    }
    return (
        auth.token ? <Outlet /> : <Navigate to='/' />
    )
}
export default PrivateRouteUser
