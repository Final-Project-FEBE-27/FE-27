import React from 'react';
import BarKategori from '../components/BarKategori';
import BuatForum from '../components/BuatForum';
import Navbar from '../components/Navbar';
import ContainerForum from '../components/ContainerForum';

const Dashboard = () => {
    
    return (
        <div className="dashboard">
            <Navbar /> 
            <div className="dashboard-content d-flex justify-content-between">
                <BarKategori />  
            <div className = "containerforum d-flex flex-column">
                <div className="d-flex flex-column-reverse">
                <ContainerForum />
                </div>
            </div>
                <BuatForum />
            </div>
        </div>
    )
}

export default Dashboard;
