import React from "react";
import ForumList from "../components/admin/ForumList";
import UserList from "../components/admin/UserList";

const AdminPanel = () => {
    return (
        <>
            <h2>User List</h2>
            <UserList />
            <br />
            <h2>List Forum</h2>
            <ForumList />
        </>
    );
};

export default AdminPanel;
