import React from 'react';
import './Nav.css';
import { withRouter, Link } from 'react-router-dom';
import useSimpleAuth from "../auth/useSimpleAuth"

const NavBar = (props) => {

    const { isAuthenticated, logout } = useSimpleAuth()


    return (
        <>
            
        {
        isAuthenticated()
            ? <><nav>
                <Link to='/'>
                    Home
            </Link>
                <Link to='/mycocktails'>
                    My Cocktails
            </Link>
                <Link to='/addcocktail'>
                    Create Cocktail
            </Link>
                <Link to='/profile'>
                    My Profile
            </Link>
                <Link onClick={() => { logout() }} to='/login'>
                    Log Out
            </Link>
            </nav></>
            : null
        }
            
        </>
    )
};

export default withRouter(NavBar); 