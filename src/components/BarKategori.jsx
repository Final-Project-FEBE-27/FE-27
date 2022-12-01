import React from 'react';
import { useNavigate, Link } from "react-router-dom"

const BarKategori = () => {

    const navigation = useNavigate();

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
