import React, {useState} from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {Feature} from "../api/types";

const Row = ({feature}: {feature: Feature}) => {
    return (
        <tr className="">
            <td className="text-dark-blue">
                <Link className="visited:text-dark-purple" to={`/features/${feature.id}`}>
                    {feature.properties.place}
                </Link>
            </td>
            <td style={{textAlign: "center"}}>{feature.properties.mag}</td>
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
};

/**
 * Latest Feature Table
 * - displays the list of earthquakes seen in the last hour
 *
 */
export const LatestTable = ({data}) => {
    // We start out sorting by time desc, as that seems the most natural
    const [sortColumn, setSortColumn] = useState("time");
    const [sortDirection, setSortDirection] = useState("desc");

    // NOTE: depending on the use case of the app, we might want to capture some (or all) of the sorting information in the url so that users can send the url to others and the receivers could be then see the same data and sort. To do this properly would require also encoded a data query cursor/timestamp so that we know the point at which to start getting data and the offsets. I've not done this as it's not in the spec, but this is one of those things that I would ask stakeholders about.
    const handleSort = (event: any) => {
        // it's safe to always update the sort column
        setSortColumn(event.target.id);
        if (event.target.id.toLowerCase() === sortColumn) {
            //flip direction
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        }
    };

    // We are going to declaratively sort the data given the current state of the component. This gets sorted on each render, which isn't usually an issue unless we have huge apps. Don't optimize this and others with useMemo etc until a need arises. YAGNI.t
    const features = !!data?.features
        ? data.features.sort((a: Feature, b: Feature) => {
              if (sortDirection === "asc") {
                  // We were sorting by asc, now we'll sort by desc
                  return a.properties[sortColumn] <= b.properties[sortColumn] ? -1 : 1;
              }
              return a.properties[sortColumn] > b.properties[sortColumn] ? -1 : 1;
          })
        : [];

    return (
        <div className="relative p-2">
            <h1 className="my-5 text-center text-dark-gray font-bold">{data.metadata.title}</h1>

            <table className="">
                <thead>
                    <tr>
                        {["title", "magnitude", "time"].map((btn) => {
                            return (
                                <th key={btn}>
                                    <button
                                        className="capitalize"
                                        id={btn}
                                        role="button"
                                        onClick={handleSort}
                                    >
                                        {btn}
                                    </button>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {features?.map((feature: Feature) => {
                        return <Row key={feature.id} feature={feature} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};
