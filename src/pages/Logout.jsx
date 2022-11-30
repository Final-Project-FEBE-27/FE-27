import React from "react";
import { Navigate } from "react-router-dom";
const Logout = () => {
    return(
        <>
            {
                alert('Logout berhasil')
            }
            <Navigate to="/login"/>
        </>
    )
};

export default Logout;