import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/action/listUserAction";
import { Link, useNavigate  } from "react-router-dom";
import Gambar from "../components/Gambar";
// import LoginButton2 from "../components/LoginButton2";
import ReturnButton from "../components/ReturnButton";
import axios from "axios";

const LoginAdmin = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const state = useSelector(state => state.listUser)
    const dispatch = useDispatch()
    const navigation = useNavigate();
    // console.log(state)

    useEffect(() => {
        dispatch(getUser())
    }, [])
    
    const handleSubmit = () => {
      var data = JSON.stringify({
        "username": email,
        "password": password
      });
      
      var config = {
        method: 'post',
        url: 'https://blue-cloudy-rattlesnake.cyclic.app/loginadmin',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log('ini response sukses ', response);
        localStorage.setItem('token', response.data.token)
        alert("Login admin sukses!")
        navigation('/admin')
      })
      .catch(function (error) {
        console.log('ini response error ', error);
        alert(error.response.data.message)
      });
    };  

    return (
        <>
        <div className="login-register-content d-flex align-items-center bg-image">
            <div className="page-img d-flex flex-column align-items-center">
                <h1><strong>Login</strong></h1>
                <Gambar />
                <div className="return-btn align-self-start">
                <Link to={"/login"}><button type="button" className="btn-darker btn btn-primary">Cancel</button></Link>
                </div>
            </div>
            <div className="content-text d-flex flex-column align-items-center">
                <h1>Login as admin</h1>
                <div className="form-login">
                    <div className="d-flex flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="align-self-center">
                        {/* <LoginButton2 /> */}
                        <Link to={"/admin"}><button type="submit" className="btn-lighter btn btn-primary" onClick={handleSubmit}>Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default LoginAdmin;