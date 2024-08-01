import ActionTypes from "../constants/index.jsx";

const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export default addTodo;