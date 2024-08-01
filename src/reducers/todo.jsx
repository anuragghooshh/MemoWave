import ActionTypes from "../constants";

const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const todo = (state = storedTodos, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      localStorage.setItem("todos", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case ActionTypes.TOGGLE_TODO:
      let modifiedTodos = state.map((todo) => {
        if (todo.id === action.id)
          return Object.assign({}, todo, { completed: !todo.completed });
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(modifiedTodos));
      return modifiedTodos;
    case ActionTypes.CLEAR_TODOS:
      localStorage.removeItem("todos");
      return [];
    default:
      return state;
  }
};

export default todo;
