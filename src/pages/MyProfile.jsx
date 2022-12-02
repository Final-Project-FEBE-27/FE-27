import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const name = localStorage.getItem("username")
    const email = localStorage.getItem("email")

    return (
        <>
            <div className="profile container mt-6">
                <div className="card">
                    <div className="card-header">
                        <p>My Profile</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Hello, this account is logged in as :</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {name}</li>
                        <li className="list-group-item">E-mail: {email}</li>
                    </ul>
                </div>
                <Link to="/dashboard"><button className="btn-darker">Return</button></Link>
            </div>
        </>
    )
}

export default MyProfile;
