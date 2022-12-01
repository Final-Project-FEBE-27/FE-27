import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetail = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigation = useNavigate();
    const { id } = useParams();
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        getUserById();
    }, [])

    const handleSubmit = () => {
        e.preventDefault();
        var data = JSON.stringify({
            "email": email,
            "password": password,
            "username": name
        });
      
      var config = {
        method: 'put',
        url: `https://blue-cloudy-rattlesnake.cyclic.app/admin/editUser/:id`,
        headers: { 
          'Content-Type': 'application/json',
          'auth_token' : token
        },
        data: data
      };
      
      axios(config)
      .then(function (response) {
        alert("Data berhasil diubah");
        navigation(`/admin`);
      })
      .catch(function (error) {
        console.log(error);
        setisError(true);
      });

    };

    const getUserById = async () => {
        const response = await axios.get(`https://blue-cloudy-rattlesnake.cyclic.app/admin/editUser/:id`);
        setName(response.data.username);
        setEmail(response.data.email);
        setPassword(response.data.password);
      };


    return (
        <>
            <div className="container edit-content">
                <h3 className="edit-title mt-6 mb-6">Edit User</h3>
                <form action="" onSubmit={handleSubmit} className="d-flex flex-column">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={email}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={password}/>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={name}/>
                    <button type="submit" className="btn-darker">Update</button>
                    <Link to={"/admin"} className="button is-danger">Cancel</Link> 
                </form>
            </div>
        </>
    )
}

export default UserDetail;