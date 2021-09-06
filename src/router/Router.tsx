import React from "react";
import {Switch, Route} from "react-router-dom";
import {Feature} from "../pages/Feature";
import {Home} from "../pages/Home";
import {Profile} from "../pages/Profile";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/features/:id">
                <Feature />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
};
