import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";

const UserList = () => {
    const navigation = useNavigate();
    const [users, setUser] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        var data = '';
      
      var config = {
        method: 'get',
        url: 'https://blue-cloudy-rattlesnake.cyclic.app/admin/user',
        headers: { 
          'Content-Type': 'application/json',
          'auth_token' : token
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        setUser(response.data.data);
        //console.log(response.data);
        setisLoading(false);
        console.log(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
        setisError(true);
      });
    }, [])
    
    const deleteUser = (id) => {
        var config = {
            method: 'delete',
            url: 'https://blue-cloudy-rattlesnake.cyclic.app/admin/user',
            headers: { 
              'Content-Type': 'application/json',
              'auth_token' : token
            },
            body: id
          };
          
          axios(config)
          .then(function (response) {
            console.log("Data berhasil dihapus")
          })
          .catch(function (error) {
            console.log(error);
            setisError(true);
          });
    };

    const editUser = (id) => {
        navigation(`/editUser/${id}`);
    }
    
    return (
        <div className="columns mt-3 is-fullwidth">
            <div className="is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreend">
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
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                        <button
                            onClick={()=> editUser(user._id)}
                            className="button is-small is-info">
                            Edit
                        </button>
                        <button
                            onClick={() => deleteUser(user._id)}
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
