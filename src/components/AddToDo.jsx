import React, { useRef } from "react";
import { useId } from "react";
import { connect } from "react-redux";
import addTodo from "../actions/addToDo";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (todo) => dispatch(addTodo(todo)),
});

const AddToDo = ({ onSubmit }) => {
  const inputRef = useRef(null);
  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
      onSubmit({
        id,
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
          <input
            type="text"
            placeholder="New Todo"
            ref={inputRef}
          />
        </div>
        <div className="col padding-left-small">
          <input type="submit" value="Add" className="paper-btn btn-small" />
        </div>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(AddToDo);