import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Feature} from "./Feature";
import {Home} from "./Home";
import {Profile} from "./Profile";

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
