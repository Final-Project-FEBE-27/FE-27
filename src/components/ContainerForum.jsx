import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function ContainerForum() {
    const navigation = useNavigate();
    const [forum, setForum] = useState([])
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
        setForum(response.data);
        console.log(forum);
        console.log(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }, [])
    

    // console.log(forum)

    const handleDetail = (id) => {
        navigation(`/yourforum/${id}`);
    }

    return (
        <>

        {forum.map((item, index) => (
            <div key={index} className="forum">
            <div className="forum-info">
                <a onClick={()=> handleDetail(item._id)}>
                    <p>{item.user}</p>
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