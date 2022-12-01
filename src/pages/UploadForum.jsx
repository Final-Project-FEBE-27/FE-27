import React from "react";
import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate  } from "react-router-dom";

const UploadForum = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [kategori, setKategori] = useState("");
    const [uploadforum, setUploadForum] = useState({});
    const navigation = useNavigate();
    const iduser = localStorage.getItem("iduser");

    // console.log(username, password);

    const handleSubmit = () => {
        setUploadForum({title, desc, kategori, name});
        console.log(uploadforum)

        const token = localStorage.getItem("token");
      
        var data = JSON.stringify({
            "user": iduser,
            "judul": title,
            "isi": desc,
            "kategori": kategori
          });
          
          var config = {
            method: 'post',
            url: 'https://blue-cloudy-rattlesnake.cyclic.app/upload',
            headers: { 
              'Content-Type': 'application/json',
              'auth_token' : token
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log('ini respon sukses: ', response);
            alert("Anda berhasil membuat forum");
            navigation(`/dashboard`);

          })
          .catch(function (error) {
            console.log('ini respon error: ', error);
            alert(error.response.data.message)
          });
    };

    // console.log(uploadforum);

    return (
        <div className="upload-forum">
        <Navbar />
        <div className="container-upload">
        <h1>Upload Forum</h1>
        <br />
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="desc">Add your forum description here!</label>
                <textarea className="form-control" id="desc" rows="7" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="form-group">
                <select className="selectform" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="politics">Politics</option>
                    <option value="health">Health</option>
                    <option value="education">Education</option>
                    <option value="others">Others</option>
                </select>
                </div>
                <button onClick={handleSubmit} className="btn-darker btn btn-primary mt-4">Upload</button>
        </div>
        </div>
    );
};

export default UploadForum;