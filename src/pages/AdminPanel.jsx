import React from "react";
import ForumList from "../components/admin/ForumList";
import UserList from "../components/admin/UserList";
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <>
            <div className="adminPanel container mt-6">
                <div className="admin-logout">
                <Link to="/logout"><button className="btn-darker">Logout</button></Link>
                </div>
                <h2 className="admin-title">User List</h2>
                <UserList />
                <br />
                <h2 className="admin-title">List Forum</h2>
                <ForumList />
            </div>
        </>
    );
};

export default AdminPanel;
