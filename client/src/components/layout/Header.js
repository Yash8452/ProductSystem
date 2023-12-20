import React from 'react'
import { Navigate,NavLink, Link } from 'react-router-dom'
import toast from 'react-hot-toast';
const Header = () => {

    const isAuthenticated = localStorage.getItem('auth');

    const handleLogout = () => {
        localStorage.removeItem('auth');
        toast.success("Logged out successfully");
        Navigate('/login');
    }

    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* Conditional rendering based on authentication status */}
                                {!isAuthenticated ? (
                                    <NavLink to='/login' className="nav-link" >Login</NavLink>
                                ) : (
                                
                                    <NavLink onClick={handleLogout} to='/login' className="nav-link" >LogOut</NavLink>
                                )}
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default Header