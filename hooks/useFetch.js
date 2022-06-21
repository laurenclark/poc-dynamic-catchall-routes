import { useReducer, useEffect } from "react";

function responseReducer() {}

export const useFetch = (url) => {
    useEffect(() => {
        const doFetch = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
            } catch (e) {
                console.error(e);
            }
        };
        doFetch();
    }, []);

    return { response };
};
