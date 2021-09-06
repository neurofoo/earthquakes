import {useEffect, useState} from "react";
import data from "./data.json";
import {Profile} from "./types";

const apiUser = (): Promise<Profile> => {
    return new Promise((resolve, reject) => {
        resolve(data.profile);
    });
};

/**
 * Mock API call to get the current profile
 */
export const useProfile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<Profile>();
    useEffect(() => {
        apiUser().then((user) => {
            setUser(user);
            setIsLoading(false);
        });
    }, [user]);

    return {isLoading, data: user};
};
