import React from "react";
import {Helmet} from "react-helmet";
import {useProfile} from "../api/use_profile";

/**
 * Profile Page
 * - displays the current user's information
 */
export const Profile = () => {
    const {data, isLoading} = useProfile();

    if (isLoading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    const title = `${data.firstName} ${data.lastName}'s Profile`;

    return (
        <div className="relative">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <main className="p-2 mx-auto max-w-2xl">
                <h1 className="my-5 md:my-10 text-2xl text-center font-bold">Profile</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <img className="" src={data?.avatarImage} alt="profile avatar image" />
                    <dl className="md:col-span-2 grid grid-cols-3 gap-2">
                        <dt>First name</dt>
                        <dd className="col-span-2">{data?.firstName}</dd>

                        <dt>Last name</dt>
                        <dd className="col-span-2">{data?.lastName}</dd>

                        <dt>Phone</dt>
                        <dd className="col-span-2">{data?.phone}</dd>

                        <dt>Email</dt>
                        <dd className="col-span-2">{data?.email}</dd>

                        <dt>Bio</dt>
                        <dd className="col-span-2">{data?.bio}</dd>
                    </dl>
                </div>
            </main>
        </div>
    );
};
