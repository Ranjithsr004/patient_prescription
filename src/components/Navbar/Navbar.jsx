import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai'
import'../PatientDetails/PatientDetails.css'
import '../../components/Home/Home.css'
import '../Navbar/Navbar.css'
import '../Home/Home.css'

const Navbar = () => {
  return (
    <div>
        <div className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i><AiOutlineMenu /></i>
                        <span className="dashboard">Dashboard</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <i className="bx bx-search"></i>
                    </div>
                    <div className="profile-details">
                        <img src="" alt="img" />
                        <span className="admin_name">Username</span>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                </nav>
            </div >
    </div>
  )
}

export default Navbar