import React from "react";
import {Link} from "react-router-dom";
import data from "./api/data.json";

export const NavBar = () => {
    return (
        <nav className="static z-10 mx-5 flex justify-between items-center w-full bg-light-gray overflow-hidden">
            <Link to="/">
                <img className="h-10 w-10" src={data.site.logoImage} alt="" />
            </Link>
            <h1>{data.site.title}</h1>
            <Link to={`/profiles/${data.profile.email}`}>Welcome {data.profile.firstName}</Link>
        </nav>
    );
};
