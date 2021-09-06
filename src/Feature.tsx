import React from "react";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {useFeature} from "./api/use_feature";

export const Feature = () => {
    const {id} = useParams<{id: string}>();
    const {data, isLoading} = useFeature(id);

    const title = `M ${data?.properties.mag} - ${data?.properties.place}`;

    if (isLoading) {
        return <div className="text-center">Loading ...</div>;
    }

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <main className="mx-auto max-w-2xl grid grid-cols place-items-center">
                <h1 className="my-5 mdmy-10 mx-auto">{title}</h1>

                <dl className="mx-auto grid grid-cols-3">
                    <dt>Title</dt>
                    <dd className="col-span-2">{title}</dd>

                    <dt>Magnitude</dt>
                    <dd className="col-span-2">{data.properties.mag}</dd>

                    <dt>Time</dt>
                    <dd className="col-span-2">
                        {new Date(data.properties.time).toLocaleString("en-us", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            timeZone: "UTC"
                        })}
                    </dd>

                    <dt>Status</dt>
                    <dd className="col-span-2">{data.properties.status}</dd>

                    <dt>Tsunami</dt>
                    <dd className="col-span-2">{data.properties.tsunami}</dd>

                    <dt>Type</dt>
                    <dd className="col-span-2">{data.properties.type}</dd>
                </dl>
            </main>
        </div>
    );
};
