import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = () => {
    return (
        <div className="p-5 mb-4-bg-light rounded-3 mt-1 header" >
            <div className="container-fluid py-5">
                <h1 className='display-5 fw-bold' > Skip the middleman — go farm direct.</h1>
                <p className='col-md-8 fs-4'>Fresh farm veggies in Pune.</p>
                <Link to='/explore' className='btn btn-primary '> Explore </Link>
            </div>
        </div>
    )
}

export default Header