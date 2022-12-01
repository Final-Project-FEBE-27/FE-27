import React from "react";
import ForumList from "../components/admin/ForumList";
import UserList from "../components/admin/UserList";
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <>
            <div className="adminPanel container mt-6">
                <Link className="admin-logout" to="/logout">Logout</Link>
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
