import React from "react";
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./nav/NavBar";
import {AppRouter} from "./router/Router";

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="mt-28" />
            <AppRouter />
        </BrowserRouter>
    );
};
