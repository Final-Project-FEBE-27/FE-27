import React from 'react';
import BarKategori from '../components/BarKategori';
import BuatForum from '../components/BuatForum';
import Navbar from '../components/Navbar';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios';
import Comment from '../components/Comment';

const DetailForum = () => {

    const [forum, setForum] = useState([])
    const { id } = useParams();
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const token = localStorage.getItem("token");
    
    // console.log(id)

    useEffect(() => {
        var data = '';
      
        var config = {
            method: 'get',
            url: `https://blue-cloudy-rattlesnake.cyclic.app/yourforum/${id}`,
            headers: { 
            'Content-Type': 'application/json',
            'auth_token' : token
            },
            data: data,
        };
      
        axios(config)
        .then(function (response) {
            setForum([response.data.data]);
            // console.log(response.data)
            setisLoading(false);
        })
        .catch(function (error) {
            console.log(error);
            setisError(true);
        });
    }, [])

    console.log(forum);

    if (isLoading) return <h1>Loading data</h1>;
    else if (!isError)

    return (
        <>
        {forum.map((el, index) => {
            return (
                <div key={index}>
                <div className="detail">
                    <Navbar /> 
                    <div className="detail-content d-flex justify-content-between">
                        <BarKategori />
                        <div className="containerdetail d-flex flex-column">
                            <div className="forum">
                                <div className="forum-info">
                                    <p>{el.user.username}</p>
                                    <h3>{el.judul}</h3>
                                </div>
                                <div className="overview">
                                    {el.isi}
                                </div>
                            </div>
                            <Comment />
                        </div>
                        <BuatForum />
                    </div>
                </div>
                </div>
            )
        })}
    </>
    )
}

export default DetailForum;