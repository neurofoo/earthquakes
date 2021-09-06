import React from "react";
import {Helmet} from "react-helmet";
import {RouteComponentProps, RouterProps} from "react-router-dom";
import {useProfile} from "./api/use_profile";

type Props = RouterProps & RouteComponentProps<{type: string}>;

export const Profile = () => {
    const {data, isLoading} = useProfile();

    return (
        <div>
            {/* TODO: add in profile context */}
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <main className="mx-auto max-w-7xl">
                <h1 className="text-2xl text-center font-bold">Profile</h1>
                <div className="grid grid-cols-2">
                    <img className="" src={data?.avatarImage} alt="profile avatar image" />
                </div>
            </main>
        </div>
    );
};
