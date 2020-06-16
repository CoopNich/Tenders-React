import React from "react";
import { Route } from 'react-router-dom';


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
            return <p>Log In Form</p>
        }}/>
        <Route path="/register" render={props => {
            return <p>Register Form</p>
        }}/>
        </>
    )
}

export default ApplicationViews; 