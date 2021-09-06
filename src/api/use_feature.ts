import {useEffect, useState} from "react";
import data from "./data.json";
import {Feature} from "./types";

const apiData = (id: string): Promise<Feature> => {
    return new Promise((resolve, reject) => {
        resolve(data.data.features.find((feature) => feature.id === id));
    });
};

/**
 * Mock API call to get a feature by id
 */
export const useFeature = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Feature>();

    useEffect(() => {
        apiData(id).then((data) => {
            // Sort Data
            setData(data);
            setIsLoading(false);
        });
    }, [data, id]);

    return {data, isLoading};
};
