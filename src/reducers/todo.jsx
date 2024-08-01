import ActionTypes from "../constants";

const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todo = (state = storedTodos, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];

        default:
            return state;
    }
}

export default todo;