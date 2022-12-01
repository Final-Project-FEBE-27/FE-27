import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function ContainerForum() {
    const navigation = useNavigate();
    const [forum, setForum] = useState([])
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        var data = '';
      
      var config = {
        method: 'get',
        url: 'https://blue-cloudy-rattlesnake.cyclic.app/dashboard',
        headers: { 
          'Content-Type': 'application/json',
          'auth_token' : token
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        setForum(response.data.data);
        //console.log(response.data);
        setisLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setisError(true);
      });
    }, [])
    
    console.log(forum)

    const handleDetail = (id) => {
        navigation(`/yourforum/${id}`);
    }

    if (isLoading) return <h1>Loading data</h1>;
    else if (!isError)
    return (
        <>
        {forum.map((item, index) => (
            <div key={index} className="forum">
            <div className="forum-info">
                <a onClick={()=> handleDetail(item._id)}>
                    <p>{item.user.username}</p>
                    <h3>{item.judul}</h3>
                </a>
            </div>
            <div className="overview">
                {item.isi}
            </div>
        </div>
        ))}
        
        </>
    )

}

export default ContainerForum;