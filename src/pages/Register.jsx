import React from "react";
import { useState } from "react";
import axios from "axios";
import Gambar from "../components/Gambar";
import RegisterButton from "../components/RegisterButton";
import { Link, useNavigate } from "react-router-dom";
// import ReturnButton from "../components/ReturnButton";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [register, setRegister] = useState({});
    const navigation = useNavigate();

    const handleSubmit = () => {
        var data = JSON.stringify({
            "email": email,
            "username": name,
            "password": password
          });
          
          var config = {
            method: 'post',
            url: 'https://blue-cloudy-rattlesnake.cyclic.app/register',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log('ini respon sukses: ', response);
            alert("Register sukses")
            navigation('/login')

          })
          .catch(function (error) {
            console.log('ini respon error: ', error);
            alert(error.response.data.message)
          });
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // alert('Username: ${username}, Password: ${password}');
    //     setRegister({ email, password, name});

    //     axios.post("http://localhost:3000/register", {
    //         email: email,
    //         password: password,
    //         name: name
    //       })
    //     .then((result) => {
    //         console.log(result.data);
    //         alert("Anda berhasil membuat akun baru");
    //         navigation(`/login`);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         alert("error");
    //     })
    //         setEmail("");
    //         setPassword("");
    //         setName("");
    // };

    // console.log(register);

    return (
        <>
        <div className="login-register-content d-flex align-items-center bg-image">
            <div className="page-img d-flex flex-column align-items-center">
                <h1><strong>Register</strong></h1>
                <Gambar />
                <div className="return-btn align-self-start">
                <Link to={"/login"}><button type="button" className="btn-darker btn btn-primary">Cancel</button></Link>
                </div>
            </div>
        <div className="content-text d-flex flex-column align-items-center">
            <h1>Register</h1>
            <div className="form-register">
                    <div className="d-flex flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        {/* <RegisterButton onClick={handleSubmit} /> */}
                        <button onClick={handleSubmit} className="btn-lighter btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;