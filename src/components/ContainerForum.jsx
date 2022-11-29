import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function ContainerForum() {
    const navigation = useNavigate();
    const [forum, setForum] = useState([])

    useEffect(() => {
        axios("https://6379ea2d7419b414df95e16c.mockapi.io/forum").then (result => {
            // console.log(result.data)
            setForum(result.data)
        })
    }, [])

    console.log(forum)

    const handleDetail = (id) => {
        navigation(`/detail/${id}`);
    }

    return (
        <>

        {forum.map((item, index) => (
            <div key={index} className="forum">
            <div className="forum-info">
                <a onClick={()=> handleDetail(item.id)}>
                    <p>{item.account}</p>
                    <h3>{item.title}</h3>
                </a>
            </div>
            <div className="overview">
                {item.desc}
            </div>
        </div>
        ))}
        
        </>
    )

}

export default ContainerForum;