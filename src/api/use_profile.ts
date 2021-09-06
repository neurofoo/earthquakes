import {useEffect, useState} from "react";
import data from "./data.json";
import {Profile} from "./types";

const apiUser = (): Promise<Profile> => {
    return new Promise((resolve, reject) => {
        resolve(data.profile);
    });
};

/**
 * Mock API call to get the current user
 */
export const useUser = () => {
    const [user, setUser] = useState<Profile>();
    useEffect(() => {
        apiUser().then((user) => setUser(user));
    }, [user]);

    return user;
};
