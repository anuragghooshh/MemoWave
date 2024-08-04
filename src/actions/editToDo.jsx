import ActionTypes from "../constants";

const editToDo = (id, text) => ({
  type: ActionTypes.EDIT_TODO,
  id,
  text,
});

export default editToDo;
