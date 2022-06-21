import { useEffect, useReducer } from "react";
import fetchReducer from "../reducers/fetchReducer";

const useFetch = (url = "", initialData = []) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    const initialState = {
        data: initialData,
        isLoading: false,
        isError: false
    };

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            dispatch({ type: "FETCH_INIT" });
            try {
                const response = await fetch(url);
                const json = await response.json();
                if (isMounted) {
                    dispatch({ type: "FETCH_SUCCESS", payload: json });
                }
            } catch (error) {
                if (isMounted) {
                    dispatch({ type: "FETCH_FAILURE" });
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return state;
};

export default useFetch;
