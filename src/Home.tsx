import React, {useState} from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {useLatestFeatures} from "./api/use_latest_features";

/**
 * Home Page
 * - displays the list of earthquakes seen in the last hour
 */
export const Home = () => {
    const [sortColumn, setSortColumn] = useState("title");
    const [sortDirection, setSortDirection] = useState("asc");

    const {data, isLoading} = useLatestFeatures();

    // TODO: should add sort information into the URL
    const handleSort = (event: any) => {
        // it's safe to always update the sort column
        setSortColumn(event.target.id);
        if (event.target.id.toLowerCase() === sortColumn) {
            //flip direction
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        }
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // We are going to declaratively sort the data give the current state of the component
    const features =
        data?.features &&
        data.features.sort((a, b) => {
            if (sortDirection === "asc") {
                return a.properties[sortColumn] <= b.properties[sortColumn] ? -1 : 1;
            }
            return a.properties[sortColumn] > b.properties[sortColumn] ? -1 : 1;
        });

    return (
        <div className="relative">
            <Helmet>
                <title>Earthquake Zen Garden</title>
            </Helmet>
            <main className="p-2 max-w-7xl mx-auto min-h-screen">
                <div className="mt-5 md:mt-10" />
                <h1 className="text-center">{data.metadata.title}</h1>
                <div className="mt-5 md:mt-10" />
                {/* TODO: component */}
                <table className="mx-auto">
                    <thead>
                        <tr>
                            <th>
                                <button
                                    id="title"
                                    role="button"
                                    className="btn"
                                    onClick={handleSort}
                                >
                                    Title
                                </button>
                            </th>
                            <th>
                                <button id="mag" role="button" className="btn" onClick={handleSort}>
                                    Magnitude
                                </button>
                            </th>
                            <th>
                                <button
                                    id="time"
                                    role="button"
                                    className="btn"
                                    onClick={handleSort}
                                >
                                    Time
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {features?.map((feature) => {
                            return (
                                // TODO: component
                                <tr className="" key={feature.id}>
                                    <td className="text-dark-blue">
                                        <Link
                                            className="visited:text-dark-purple"
                                            to={`/features/${feature.id}`}
                                        >
                                            {feature.properties.place}
                                        </Link>{" "}
                                    </td>
                                    <td style={{textAlign: "center"}}>{feature.properties.mag}</td>
                                    {/* FIXME: correct date parsing */}
                                    <td>
                                        {new Date(feature.properties.time).toLocaleString("en-us", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                            hour: "numeric",
                                            minute: "numeric",
                                            timeZone: "UTC"
                                        })}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    );
};
