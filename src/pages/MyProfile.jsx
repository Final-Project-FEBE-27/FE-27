import React from 'react';

const MyProfile = () => {
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("account")

    return (
        <>
            <div className="profile container mt-5">
                <div className="card">
                    <div className="card-header">
                        My Profile
                    </div>
                    <div className="card-body">
                        <p className="card-text">Hello, this is my profile page </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">My name is {name}</li>
                        <li className="list-group-item">Contact me at {email}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MyProfile;
