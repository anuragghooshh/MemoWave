import React, { useRef } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import addTodo from "../actions/addToDo";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (todo) => dispatch(addTodo(todo)),
});

const AddToDo = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
      onSubmit({
        id: uuidv4(),
        text: inputRef.current.value,
        completed: false,
      });
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="row">
        <div className="col padding-right-small">
          <input type="text" placeholder="New Todo" ref={inputRef} />
        </div>
        <div className="col padding-left-small">
          <input type="submit" value="Add" className="paper-btn btn-small" />
        </div>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(AddToDo);
