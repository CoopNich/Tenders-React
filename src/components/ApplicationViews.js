import React from "react";
import { Route } from 'react-router-dom';
import Login from "./auth/Login"
import Register from "./auth/Register"
import CocktailList from "./cocktails/CocktailList"
import CocktailDetail from "./cocktails/CocktailDetail"
import SearchResults from "./search/ResultsList"
import SearchedCocktailDetail from "./search/SearchedCocktailDetail"


const ApplicationViews = (props) => {

    return (
        <>
            <Route path="/ " render={props => {
                return <p>Home Page</p>
            }} />
            <Route exact path="/mycocktails" render={props => {
                return <CocktailList {...props} />
            }} />
            <Route
                path="/mycocktails/:cocktailId(\d+)"
                render={(props) => {
                    return (
                    <CocktailDetail
                     cocktailId={parseInt(props.match.params.cocktailId)}
                    {...props}/> )}}
            />
            <Route path="/addcocktail" render={props => {
                return <p>Cocktail Form</p>
            }} />
            <Route path="/results" render={props => {
                return <SearchResults {...props} />
            }} />
            <Route path="/profile" render={props => {
                return <p>My Profile</p>
            }} />
            <Route path="/login" render={props => {
                return <Login {...props} />
            }} />
            <Route path="/register" render={props => {
                return <Register {...props} />
            }} />
            <Route
                path="/cocktails/:cocktailId(\d+)"
                render={(props) => {
                    return (
                    <SearchedCocktailDetail
                     cocktailId={parseInt(props.match.params.cocktailId)}
                    {...props}/> )}}
            />
        </>
    )
}

export default ApplicationViews; 