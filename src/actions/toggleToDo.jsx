import ActionTypes from "../constants";

const toggleToDo = (id) => ({
    type: ActionTypes.TOGGLE_TODO,
    id
});

export default toggleToDo;