import React from 'react';
import BarKategori from '../components/BarKategori';
import BuatForum from '../components/BuatForum';
import Navbar from '../components/Navbar';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom"


const CategoryPage = () => {
    const navigation = useNavigate();
    const [forum, setForum] = useState([])
    const { kategori } = useParams();
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const token = localStorage.getItem("token");
    //console.log(kategori)

    useEffect(() => {
        var data = '';
      
        var config = {
            method: 'get',
            url: 'https://blue-cloudy-rattlesnake.cyclic.app/dashboard',
            headers: { 
            'Content-Type': 'application/json',
            'auth_token' : token
            },
            data: data,
        };
      
        axios(config)
        .then(function (response) {
            setForum(response.data.data);
            console.log(response.data)
            //console.log(response.data);
            setisLoading(false);
        })
        .catch(function (error) {
            console.log(error);
            setisError(true);
        });
    }, [])
    
    //console.log(forum)

    const handleDetail = (id) => {
        navigation(`/yourforum/${id}`);
    }

    if (isLoading) return <h1>Loading data</h1>;
    else if (!isError)

    return (
        <>
        <div className="dashboard">
            <Navbar /> 
            <div className="dashboard-content d-flex justify-content-between">
            <BarKategori />
                <div className="containerforum d-flex flex-column">
                {forum.filter((el) => el.kategori === kategori).map((el, index) => {
                return (
                    <div key={index}>
                    <div className="forum">
                        <div className="forum-info">
                            <h3 onClick={()=> handleDetail(el._id)}>{el.judul}</h3>
                        </div>
                        <div className="overview">
                            {el.isi}
                        </div>
                    </div>
                    </div>
                    )
                })}
                </div>
                <BuatForum />
            </div>
        </div>
        </>
    )
}

export default CategoryPage;