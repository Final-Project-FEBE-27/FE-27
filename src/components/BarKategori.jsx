import React from 'react';
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios';

const BarKategori = () => {

    const navigation = useNavigate();
    const [forum, setForum] = useState([])

    useEffect(() => {
        axios("https://6379ea2d7419b414df95e16c.mockapi.io/forum").then (result => {
            // console.log(result.data)
            setForum(result.data)
        })
    }, [])

    // console.log(forum)

    const handleCategory = (kategori) => {
        navigation(`/kategori/${kategori}`);
    }

    

    return (
        <>
        <div className="category">
            <ul>
                <li><Link to={"/dashboard"} className="category-text">Newest</Link></li>
                <li><a className="category-text" onClick={() => handleCategory('politics')}>Politics</a></li>
                <li><a className="category-text" onClick={() => handleCategory('health')}>Health</a></li>
                <li><a className="category-text" onClick={() => handleCategory('education')}>Education</a></li>
                <li><a className="category-text" onClick={() => handleCategory('others')}>Others</a></li>
            </ul>
        </div>
        </>
    )
}

export default BarKategori;
