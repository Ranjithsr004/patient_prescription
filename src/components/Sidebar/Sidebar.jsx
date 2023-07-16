import React from 'react'
import { IoMdContacts } from 'react-icons/io'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdContacts } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import'../PatientDetails/PatientDetails.css'
import { Link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="logo-details">
                    <i></i>
                    <span className="logo_name">@ EHR Safe</span>
                </div>
                <ul className="nav-links">
                <Link to="/">
                    <li className="li">
                        <a href="#" className="active">
                            <i><IoMdContacts /></i>
                            <span className="links_name">Patients</span>
                        </a>
                    </li>
                    </Link>
                    <Link to="/viewpres" >
                    <li>
                        <a href="#" className="active">
                            <i><AiOutlinePlusCircle /></i>
                            <span className="links_name">View Patient Record</span></a>
                    </li>
                    </Link>
                    <Link to="/addpres" >
                    <li>
                        <a href="#" className="active">
                            <i><AiOutlinePlusCircle /></i>
                           <span className="links_name">Add Prescription</span>
                        </a>
                    </li>
                    </Link>
                    {/* <Link to="/">
                    <li>
                        <a href="#" className="active">
                            <i><AiOutlinePlusCircle /></i>
                            <span className="links_name">Investigations</span>
                        </a>
                    </li>
                    </Link> */}
                    <ul className="log_out">
                        <li>
                            <a href="#">
                                <i><MdContacts /></i>
                                <span className="links_name">Contact us</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                                <i><FiLogOut /></i>
                                <span className="links_name">Log out</span>
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar