import React from "react";
import { useState } from "react";

const Comment = () => {
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const name = localStorage.getItem("username");
    
    const HandleBtn = () => {
        setComments((comments) => [...comments, comment])
    }

    const HandleComment = (e) => {
        setComment(e.target.value)
    }

    return (
        <>
            <div className="main-container">
                <div className="comment-flexbox">
                    <h5 className="comment-text">Comment</h5>
                    <textarea value={comment} className="input-comment" onChange={HandleComment}/>
                    <button className="comment-btn" onClick={HandleBtn}>Submit</button>
                    {comments.map((text, index) => (
                    <div key={index} className="comment-container">
                        <p style={{ marginLeft: "6px", fontSize:18, marginTop:6 }}>{name}</p>
                        <p style={{ marginLeft: "10px", textAlign:'start', marginTop:10 }}>{text}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Comment;