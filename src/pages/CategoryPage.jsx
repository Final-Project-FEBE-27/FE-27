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
    //console.log(kategori)

    useEffect(() => {
        axios("https://6379ea2d7419b414df95e16c.mockapi.io/forum").then (result => {
            // console.log(result.data)
            setForum(result.data)
        })
    }, [])

    const handleDetail = (id) => {
        navigation(`/yourforum/${id}`);
    }
    //console.log(forum)

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
                                    <h3 onClick={()=> handleDetail(el.id)}>{el.title}</h3>
                                </div>
                                <div className="overview">
                                    {el.desc}
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