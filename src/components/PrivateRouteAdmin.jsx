import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const isAuth = () => {
    const user=localStorage.getItem("user")
    console.log("autentikasi berhasil");
    if (user == "admin") {
        return true
    } else {
        return false
    }
};

const PrivateRouteAdmin=() => {

    const auth=isAuth()

  return auth?<Outlet/>: <Navigate to="/login"/>
}

export default PrivateRouteAdmin;