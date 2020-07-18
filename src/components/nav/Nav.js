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
            })
    };
    
    useEffect(() => {
        getBartender();
    }, [isAuthenticated()]);


    return (
        <>

            {
                isAuthenticated()
                    ? <>
                        <div id="navDiv">
                            <nav>
                            {bartender.image_url
                            ?<img className="nav-image" src={bartender.image_url}></img>
                            :<img className="nav-image" src={require("../media/profile.png")}></img>
                            }
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