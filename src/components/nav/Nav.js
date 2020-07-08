import React, { useState, useEffect } from 'react';
import './Nav.css';
import { withRouter, Link } from 'react-router-dom';
import useSimpleAuth from "../auth/useSimpleAuth"
import SearchBar from '../search/SearchBar'
import BartenderManager from '../../modules/BartenderManager'

const NavBar = (props) => {
    const [bartender, setBartender] = useState({});
    const { isAuthenticated, logout } = useSimpleAuth()

    const getBartender = () => {
        BartenderManager.getLoggedInUser()
            .then(user => {
                setBartender(user);
            });
    };

    useEffect(() => {
        getBartender();
    }, []);


    return (
        <>

            {
                isAuthenticated()
                    ? <>
                        <div id="navDiv">
                            <nav>
                            <img className="nav-image" src={bartender.image_url}></img>
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