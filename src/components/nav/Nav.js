import React from 'react';
import './Nav.css';
import { withRouter, Link } from 'react-router-dom';
import useSimpleAuth from "../auth/useSimpleAuth"
import SearchBar from '../search/SearchBar'

const NavBar = (props) => {

    const { isAuthenticated, logout } = useSimpleAuth()


    return (
        <>

            {
                isAuthenticated()
                    ? <>
                        <div id="navDiv">
                            <nav>
                                <Link to='/mycocktails'>
                                    My Cocktails
                                </Link>
                                <Link to='/addcocktail'>
                                    Create Cocktail
                                </Link>
                                <SearchBar />
                            </nav>
                            <div className="logout-div">
                                <nav>
                                <Link onClick={() => { logout() }} to='/login'>
                                    Log Out
                                </Link>
                                </nav>
                                </div>
                        </div></>
                    : null
            }

        </>
    )
};

export default withRouter(NavBar); 