import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute: React.FC = () => {
    const auth = { 'token': false }
    if (localStorage.getItem('user') === 'admin') {
        auth.token = true
    } else {
        <Navigate to='/' />
    }
    return (
        auth.token ? <Outlet /> : <Navigate to='/' />
    )
}
export default PrivateRoute
