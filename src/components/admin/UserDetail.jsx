import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetail = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [user, setUser] = useState([])
    const navigation = useNavigate();
    const { id } = useParams();
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        getUserById();
    }, [])

    const handleSubmit = (id) => {
        var data = JSON.stringify({
            "email": email,
            "username": name
        });
      
        //console.log(id)

      var config = {
        method: 'put',
        url: `https://blue-cloudy-rattlesnake.cyclic.app/admin/editUser/${id}`,
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

    const getUserById = () => {
      var data = '';
      
      var config = {
        method: 'get',
        url: 'https://blue-cloudy-rattlesnake.cyclic.app/admin/user',
        headers: { 
          'Content-Type': 'application/json',
          'auth_token' : token
        },
        data: data
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


      };


    return (
        <>{user.filter((el) => el._id === id).map((el, index) => {
            return (
            <div key={index}>
            <div className="container edit-content">
                <h3 className="edit-title mt-6 mb-6">Edit User</h3>
                <div className="d-flex flex-column">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={el.email}/>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={el.username}/>
                    <button type="submit" onClick={()=> handleSubmit(el._id)} className="btn-darker">Update</button>
                    <Link to={"/admin"} className="button is-danger">Cancel</Link> 
                </div>
            </div>
            </div>
            )
        })}
        </>
    )
}

export default UserDetail;