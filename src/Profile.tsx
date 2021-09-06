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
                <div className="grid grid-cols-3">
                    <img className="" src={data?.avatarImage} alt="profile avatar image" />
                    <dl className="col-span-2 grid grid-cols-2">
                        <dt>First name</dt>
                        <dd>{data?.firstName}</dd>

                        <dt>Last name</dt>
                        <dd>{data?.lastName}</dd>

                        <dt>Phone</dt>
                        <dd>{data?.phone}</dd>

                        <dt>Email</dt>
                        <dd>{data?.email}</dd>

                        <dt>Bio</dt>
                        <dd>{data?.bio}</dd>
                    </dl>
                </div>
            </main>
        </div>
    );
};
