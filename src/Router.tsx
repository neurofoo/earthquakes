import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path="/profiles/:id">
                <div>profiles</div>
            </Route>
            <Route path="/favorites/:id">
                <div>favorites</div>
            </Route>
            <Route path="/">
                <div>home</div>
            </Route>
        </Switch>
    );
};
