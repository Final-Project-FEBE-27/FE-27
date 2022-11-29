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
    console.log(state)

    useEffect(() => {
        dispatch(getUser())
    }, [])
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log({ email, password });
      axios.get("https://6379ea2d7419b414df95e16c.mockapi.io/admin", {
        email: email,
        password: password,
      })
        .then((result) => {
          if(email == "" && password == ""){
            alert("Masukkan Email dan Password anda");
          }
          result.data.forEach((element) => {
            if (element.email === email && element.password === password) {
              alert("Berhasil login sebagai admin!");
              localStorage.setItem("user", "admin");
              const user=localStorage.getItem("user");
              console.log(user);
              navigation(`/admin`);
              localStorage.setItem("account", email);
              localStorage.setItem("pass", password);
            }
          });
        })
        .catch((error) => {
          alert(error, "Error");
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
                    <form action="" onSubmit={handleSubmit} className="d-flex flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="align-self-center">
                        {/* <LoginButton2 /> */}
                        <Link to={"/dashboard"}><button type="submit" className="btn-lighter btn btn-primary" onClick={handleSubmit}>Login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default LoginAdmin;