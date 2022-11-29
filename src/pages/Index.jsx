import React from "react";
import GambarIndex from "../components/Gambarindex";
import LoginButton1 from "../components/LoginButton1";

const Index = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("account");
    localStorage.removeItem("pass");
    localStorage.removeItem("name");

    return (
        <>
        <div className="index-content d-flex align-items-center bg-image">
            <div className="page-img">
                <GambarIndex />
            </div>
            <div className="index-text d-flex flex-column align-items-center">
                <h1>SELAMAT DATANG</h1>
                <p><strong>Explore<span className="pink">ASEAN</span></strong> merupakan sebuah wadah untuk para pemuda ASEAN berbagi informasi, pengetahuan, dan aspirasi demi membentuk jaringan dengan satu sama lain</p>
                <LoginButton1 />
            </div>
        </div>
        </>
    );
};

export default Index;