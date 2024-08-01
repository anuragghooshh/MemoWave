import ActionTypes from "../constants";

const filteredTodos = (todos=[], filter) => {
  switch (filter) {
    case ActionTypes.FILTER_ALL:
      return todos;
    case ActionTypes.FILTER_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case ActionTypes.FILTER_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

export default filteredTodos;