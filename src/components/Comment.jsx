import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Comment = () => {
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [user, setUser] = useState()
    const { id } = useParams();
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const [showComment, setshowComment] = useState([])
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");

    useEffect(() => {
        var data = '';
      
        var config = {
            method: 'get',
            url: `https://blue-cloudy-rattlesnake.cyclic.app/yourforum/${id}`,
            headers: { 
            'Content-Type': 'application/json',
            'auth_token' : token
            },
            data: data
        };
      
        axios(config)
        .then(function (response) {
            setshowComment(response.data.data.komentar);
            //console.log(response.data.data.komentar)
            // console.log(response.data)
            setisLoading(false);
        })
        .catch(function (error) {
            console.log(error);
            setisError(true);
        });
    }, [])

    console.log(showComment);
    
    const HandleBtn = () => {
        var data = JSON.stringify({
            "komentar": comment,
            "username": name
        });

        var config = {
            method: 'post',
            url: `https://blue-cloudy-rattlesnake.cyclic.app/yourforum/${id}`,
            headers: { 
            'Content-Type': 'application/json',
            'auth_token' : token
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            setComments([response.data.data]);
            setUser(name)
            // console.log(response.data)
            console.log("komentar berhasil");
            setisLoading(false);
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
            setisError(true);
        });
    }

    const HandleComment = (e) => {
        setComment(e.target.value)
    }

    if (isLoading) return <h1>Loading data</h1>;
    else if (!isError)

    return (
        <>
            <div className="main-container">
                <div className="comment-flexbox">
                    <h5 className="comment-text">Comment</h5>
                    <textarea value={comment} className="input-comment" onChange={HandleComment}/>
                    <button className="comment-btn" onClick={HandleBtn}>Submit</button>
                    {showComment.map((el, index) => {
                        return (
                        <div key={index} className="comment-container">
                            <p style={{ marginLeft: "6px", fontSize:18, marginTop:6 }}>{el.username}</p>
                            <p style={{ marginLeft: "10px", textAlign:'start', marginTop:10 }}>{el.komentar}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            
        </>
    )
}

export default Comment;