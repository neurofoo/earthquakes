import React, {useState} from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

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
        ? data.features.sort((a, b) => {
              console.log("sort", sortColumn, sortDirection);

              if (sortDirection === "asc") {
                  // We were sorting by asc, now we'll sort by desc
                  return a.properties[sortColumn] <= b.properties[sortColumn] ? -1 : 1;
              }
              return a.properties[sortColumn] > b.properties[sortColumn] ? -1 : 1;
          })
        : [];

    return (
        <div className="p-2 max-w-7xl mx-auto min-h-screen">
            <h1 className="my-5 text-center text-dark-gray font-bold">{data.metadata.title}</h1>
            <table className="mx-auto">
                <thead>
                    <tr>
                        <th>
                            <button id="title" role="button" className="btn" onClick={handleSort}>
                                Title
                            </button>
                        </th>
                        <th>
                            <button id="mag" role="button" className="btn" onClick={handleSort}>
                                Magnitude
                            </button>
                        </th>
                        <th>
                            <button id="time" role="button" className="btn" onClick={handleSort}>
                                Time
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {features?.map((feature) => {
                        return (
                            // NOTE: as above, this would normally be extracted into its own component
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
        </div>
    );
};
