import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/actions";

const fetchReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return { ...state, isLoading: true, isError: false };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            };
        case FETCH_FAILURE:
            return { ...state, isLoading: false, isError: true };
        default:
            return { ...state };
    }
};

export default fetchReducer;
