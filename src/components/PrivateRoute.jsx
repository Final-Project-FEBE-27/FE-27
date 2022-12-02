import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const isAuth = () => {
    const user=localStorage.getItem('token')
    //console.log("autentikasi berhasil");
    if (user != null) {
        return true
    } else {
        return false
    }
};

const PrivateRoute=() => {

    const auth=isAuth()

  return auth?<Outlet/>: <Navigate to="/login"/>
}

export default PrivateRoute;