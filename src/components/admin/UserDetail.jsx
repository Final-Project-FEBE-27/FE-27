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
    //console.log(id)

    useEffect(() => {
            getUserById();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Username: ${username}, Password: ${password}');

        axios.put(`https://6379ea2d7419b414df95e16c.mockapi.io/user/${id}`, {
            email: email,
            password: password,
            name: name
          })
        .then((result) => {
            console.log(result.data);
            alert("Data berhasil diubah");
            navigation(`/admin`);
        })
        .catch((error) => {
            console.log(error);
            alert("error");
        })
            setEmail("");
            setPassword("");
            setName("");
    };

    const getUserById = async () => {
        const response = await axios.get(`https://6379ea2d7419b414df95e16c.mockapi.io/user/${id}`);
        setName(response.data.name);
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