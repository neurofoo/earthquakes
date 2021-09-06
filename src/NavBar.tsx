import React from "react";
import {Link} from "react-router-dom";
import data from "./api/data.json";

export const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 z-10 px-1 md:px-5 py-5 flex justify-between items-center w-full bg-light-gray text-center shadow overflow-hidden">
            <Link to="/">
                <img className="h-10 w-10" src={data.site.logoImage} alt="" />
            </Link>
            <h1 className="text-medium-gray text-base md:text-2xl">{data.site.title}</h1>
            <Link
                className="text-dark-blue text-sm md:text-base underline visited:text-dark-purple"
                to={`/profile`}
            >
                Welcome {data.profile.firstName}
            </Link>
        </nav>
    );
};
