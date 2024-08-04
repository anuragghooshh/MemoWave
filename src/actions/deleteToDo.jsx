import ActionTypes from "../constants";

const deleteToDo = (id) => ({
  type: ActionTypes.DELETE_TODO,
  id,
});

export default deleteToDo;