import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const ForumList = () => {
    const [forums, setForum] = useState([]);

    useEffect(() => {
        getForums();
    }, []);
    
    const getForums = async () => {
        const response = await axios.get("https://6379ea2d7419b414df95e16c.mockapi.io/forum");
        setForum(response.data);
    };
    
    const deleteForum = async (id) => {
        try {
          await axios.delete(`https://6379ea2d7419b414df95e16c.mockapi.io/forum/${id}`);
          getForums();
        } catch (error) {
          console.log(error);
        }
    };
    
    return (
        <div className="columns mt-3 is-fullwidth">
            <div className="is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                <table className="table-forum table is-striped is-fullwidth">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Category</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {forums.map((forum, index) => (
                    <tr key={forum.id}>
                        <td>{index + 1}</td>
                        <td>{forum.title}</td>
                        <td>{forum.desc}</td>
                        <td>{forum.kategori}</td>
                        <td>
                        <button
                            onClick={() => deleteForum(forum.id)}
                            className="button is-small is-danger">
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default ForumList;
