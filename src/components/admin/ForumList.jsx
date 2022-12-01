import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
// import { Link } from "react-router-dom";

const ForumList = () => {
    const navigation = useNavigate();
    const [forums, setForum] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        var data = '';
      
      var config = {
        method: 'get',
        url: 'https://blue-cloudy-rattlesnake.cyclic.app/admin',
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
        console.log(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
        setisError(true);
      });
    }, [])

    const deleteForum = (id) => {
        console.log(id)

        var data = JSON.stringify({
            "id": id
        })

        var config = {
            method: 'delete',
            url: 'https://blue-cloudy-rattlesnake.cyclic.app/admin',
            headers: { 
              'Content-Type': 'application/json',
              'auth_token' : token
            },
            data: data
          };
          
          axios(config)
          .then(function (response) {
            console.log("Data berhasil dihapus")
            navigation('/admin');
          })
          .catch(function (error) {
            console.log(error);
            setisError(true);
          });
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
                    <tr key={forum._id}>
                        <td>{index + 1}</td>
                        <td>{forum.judul}</td>
                        <td>{forum.isi}</td>
                        <td>{forum.kategori}</td>
                        <td>
                        <button
                            onClick={() => deleteForum(forum._id)}
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
