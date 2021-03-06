import React from "react";
import {Helmet} from "react-helmet";
import {useLatestFeatures} from "../api/use_latest_features";
import {LatestTable} from "../components/LatestTable";

/**
 * Home Page
 * - displays the list of earthquakes seen in the last hour
 */
export const Home = () => {
    const {data, isLoading} = useLatestFeatures();

    if (isLoading) {
        return <h1 className="text-center">Loading...</h1>;
    }

    return (
        <div className="relative">
            <Helmet>
                <title>Earthquake Zen Garden</title>
            </Helmet>
            <main className="p-2 grid grid-cols-1 place-items-center">
                <LatestTable data={data} />
            </main>
        </div>
    );
};
