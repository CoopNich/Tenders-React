import React from "react";
import { Route, Redirect } from 'react-router-dom';
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./home/Home"
import CocktailList from "./cocktails/CocktailList"
import CocktailDetail from "./cocktails/CocktailDetail"
import CocktailForm from "./cocktails/CocktailForm"
import SearchResults from "./search/ResultsList"
import SearchedCocktailDetail from "./search/SearchedCocktailDetail"
import useSimpleAuth from "./auth/useSimpleAuth"


const ApplicationViews = (props) => {

    const { isAuthenticated } = useSimpleAuth()



    return (
        <>
            <Route exact path="/" render={props => {
                if (isAuthenticated()) {
                    return <Home {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }

            }} />
            <Route exact path="/mycocktails" render={props => {
                if (isAuthenticated()) {
                    return <CocktailList {...props} />
                } else {
                    return <Redirect to="/login" />;
                }

            }} />
            <Route
                path="/mycocktails/:cocktailId(\d+)"
                render={(props) => {
                    if (isAuthenticated()) {
                        return (<CocktailDetail
                            cocktailId={parseInt(props.match.params.cocktailId)}
                            {...props} />)
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
            <Route path="/addcocktail" render={props => {
                if (isAuthenticated()) {
                    return <CocktailForm {...props} />
                } else {
                    return <Redirect to="/login" />;
                }

            }} />
            <Route path="/results" render={props => {
                if (isAuthenticated()) {
                    return <SearchResults {...props} />
                } else {
                    return <Redirect to="/login" />;
                }

            }} />
            <Route path="/profile" render={props => {
                if (isAuthenticated()) {
                    return <p>My Profile</p>
                } else {
                    return <Redirect to="/login" />;
                }

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
                    if (isAuthenticated()) {
                        return (
                            <SearchedCocktailDetail
                                cocktailId={parseInt(props.match.params.cocktailId)}
                                {...props} />)
                    } else {
                        return <Redirect to="/login" />;
                    }

                }}
            />
        </>
    )
}

export default ApplicationViews; 