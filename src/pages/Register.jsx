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

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Username: ${username}, Password: ${password}');
        setRegister({ email, password, name});

        axios.post("https://6379ea2d7419b414df95e16c.mockapi.io/user", {
            email: email,
            password: password,
            name: name
          })
        .then((result) => {
            console.log(result.data);
            alert("Anda berhasil membuat akun baru");
            navigation(`/login`);
        })
        .catch((error) => {
            console.log(error);
            alert("error");
        })
            setEmail("");
            setPassword("");
            setName("");
    };

    console.log(register);

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
                    <form action="" onSubmit={handleSubmit} className="d-flex flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <RegisterButton />
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;