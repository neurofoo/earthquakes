import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
