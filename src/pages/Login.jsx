import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/action/listUserAction";
import { Link, useNavigate  } from "react-router-dom";
import Gambar from "../components/Gambar";
// import LoginButton2 from "../components/LoginButton2";
import ReturnButton from "../components/ReturnButton";
import axios from "axios";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const state = useSelector(state => state.listUser)
    const dispatch = useDispatch();
    const navigation = useNavigate();
    // console.log(state)

    const handleSubmit = () => {
      var data = JSON.stringify({
        "email": email,
        "password": password
      });
      
      var config = {
        method: 'post',
        url: 'https://blue-cloudy-rattlesnake.cyclic.app/login',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log('ini response sukses ', response);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', response.data.data)
        localStorage.setItem('iduser', response.data.id)
        localStorage.setItem('email', email)
        alert("Login sukses")
        navigation('/dashboard')
      })
      .catch(function (error) {
        console.log('ini response error ', error);
        alert(error.response.data.message)
      });
    }

    // useEffect(() => {
    //     dispatch(getUser())
    // }, [])
    
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // console.log({ email, password });
    //   axios.get("https://6379ea2d7419b414df95e16c.mockapi.io/user", {
    //     email: email,
    //     password: password,
    //     name: name
    //   })
    //     .then((result) => {
    //       if(email == "" && password == ""){
    //         alert("Masukkan Email dan Password anda");
    //       }
    //       result.data.forEach((element) => {
    //         if (element.email === email && element.password === password) {
    //           alert("Berhasil login!");
    //           localStorage.setItem("user", "user");
    //           const user=localStorage.getItem("user");
    //           // console.log(user);
    //           navigation(`/dashboard`);
    //           localStorage.setItem("account", email);
    //           localStorage.setItem("pass", password);
    //           const userData = result.data.filter(el => {
    //             return el.email === email;
    //           });
    //           const getname = userData.map((el) => {
    //             return el.name
    //           })
    //           localStorage.setItem("name", getname);
    //           const nama = localStorage.getItem("name");
    //           // console.log(nama);
    //         }
    //       });
    //     })
    //     .catch((error) => {
    //       alert(error, "Error");
    //     });
    // };  

    return (
        <>
        <div className="login-register-content d-flex align-items-center bg-image">
            <div className="page-img d-flex flex-column align-items-center">
                <h1><strong>Login</strong></h1>
                <Gambar />
                <div className="return-btn align-self-start">
                    <ReturnButton />
                </div>
            </div>
            <div className="content-text d-flex flex-column align-items-center">
                <h1>Login</h1>
                <div className="form-login">
                    <div className="d-flex flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {/* <Link to={"/dashboard"}> */}
                          <button onClick={handleSubmit} className="btn-lighter btn btn-primary">Login</button>
                          {/* </Link> */}
                        <div className="text-center login-text">
                        <p>Don't have an account? <Link to={"/register"}>Create account</Link></p>
                        <p><strong>OR</strong></p>
                        <p>Are you an admin? <Link to={"/loginadmin"}>Login as admin</Link></p>
                        </div>
                        <div className="align-self-center">
                        {/* <LoginButton2 /> */}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;