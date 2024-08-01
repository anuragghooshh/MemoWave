import ActionTypes from "../constants";

const setFilter = (filter) => ({
    type: ActionTypes.SET_FILTER,
    filter
});

export default setFilter;