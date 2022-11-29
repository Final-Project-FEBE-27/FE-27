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
    //console.log(id)

    useEffect(() => {
        axios("https://6379ea2d7419b414df95e16c.mockapi.io/forum").then (result => {
            // console.log(result.data)
            setForum(result.data)
        })
    }, [])

    //console.log(forum)



    return (
        <>{forum.filter((el) => el.id === id).map((el) => {
            return (
                <div key={el.id}>
                <div className="detail">
                    <Navbar /> 
                    <div className="detail-content d-flex justify-content-between">
                        <BarKategori />
                        <div className="containerdetail d-flex flex-column">
                            <div className="forum">
                                <div className="forum-info">
                                    <p>{el.account}</p>
                                    <h3>{el.title}</h3>
                                </div>
                                <div className="overview">
                                    {el.desc}
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