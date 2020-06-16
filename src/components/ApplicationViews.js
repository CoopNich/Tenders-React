import React from "react";
import { Route } from 'react-router-dom';
import Login from "./auth/Login"
import Register from "./auth/Register"


const ApplicationViews = (props) => {

    return(
        <>
        <Route path="/ " render={props => {
            return <p>Home Page</p>
        }}/>
        <Route path="/mycocktails" render={props => {
            return <p>My Cocktails</p>
        }}/>
        <Route path="/addcocktail" render={props => {
            return <p>Cocktail Form</p>
        }}/>
        <Route path="/search" render={props => {
            return <p>Cocktail Search Results</p>
        }}/>
        <Route path="/profile" render={props => {
            return <p>My Profile</p>
        }}/>
        <Route path="/login" render={props => {
            return <Login {...props}/>
        }}/>
        <Route path="/register" render={props => {
            return <Register {...props}/>
        }}/>
        </>
    )
}

export default ApplicationViews; 