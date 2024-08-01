import ActionTypes from "../constants";

const FILTER_KEY = 'filter';

const storedFilter = localStorage.getItem(FILTER_KEY) || ActionTypes.FILTER_ALL;

const filter = (state = storedFilter, action) => {
    switch(action.type) {
        case ActionTypes.SET_FILTER:
            localStorage.setItem(FILTER_KEY, action.filter);
            return action.filter;
        default:
            return state;
    }
}

export default filter;