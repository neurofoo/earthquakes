import React from "react";
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./NavBar";
import {AppRouter} from "./Router";

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
};
