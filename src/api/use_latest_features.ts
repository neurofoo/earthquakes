import {useEffect, useState} from "react";
import data from "./data.json";
import {Data} from "./types";

const apiData = (): Promise<Data> => {
    return new Promise((resolve, reject) => {
        resolve(data.data);
    });
};

// TODO: thinking about putting the sorting in here. could be interesting
interface Args {
    sortBy: {
        field: string;
        direction: string;
    };
}

/**
 * Mock API call to get the current data
 */
export const useLatestFeatures = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Data>();

    useEffect(() => {
        apiData().then((data) => {
            // Sort Data
            setData(data);
            setIsLoading(false);
        });
    }, [data]);

    return {data, isLoading};
};
