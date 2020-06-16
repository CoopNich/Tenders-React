import React from 'react';
import './Nav.css';
import { withRouter, Link } from 'react-router-dom';
import useSimpleAuth from "../auth/useSimpleAuth"

const NavBar = (props) => {

    const { isAuthenticated, logout } = useSimpleAuth()


    return (
        <>
            <nav>
        {
        isAuthenticated()
            ? <><Link to='/ '>
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
                <Link onClick={() => { logout() }} to='/ '>
                    Log Out
            </Link></>
            : <> <Link to='/login'>
                    Log In
            </Link>
                <Link to='/register'>
                    Register
            </Link></>
        }
            </nav>
        </>
    )
};

export default withRouter(NavBar); 