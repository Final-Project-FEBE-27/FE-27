import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const UserList = () => {
    const navigation = useNavigate();
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = async () => {
        const response = await axios.get("https://6379ea2d7419b414df95e16c.mockapi.io/user");
        setUser(response.data);
    };
    
    const deleteUser = async (id) => {
        try {
          await axios.delete(`https://6379ea2d7419b414df95e16c.mockapi.io/user/${id}`);
          getUsers();
        } catch (error) {
          console.log(error);
        }
    };

    const editUser = (id) => {
        navigation(`/editUser/${id}`);
    }
    
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half table-responsive">
                <table className="table-user table is-striped is-fullwidth">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                        <button
                            onClick={()=> editUser(user.id)}
                            className="button is-small is-info">
                            Edit
                        </button>
                        <button
                            onClick={() => deleteUser(user.id)}
                            className="button is-small is-danger">
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
