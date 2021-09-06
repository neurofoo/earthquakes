import React from "react";
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./NavBar";
import {AppRouter} from "./Router";

// on page change to use for visited links

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="mt-28" />
            <AppRouter />
        </BrowserRouter>
    );
};
