import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ToDo from "./ToDo";
import ActionTypes from "../constants";
import Filter from "./Filter";
import filteredTodos from "../utils/filteredToDos";

const List = styled.ul`
  padding-left: 0;
  min-height: 300px;
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    background-color: #007bff;

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
`;

const mapStateToProps = (state) => ({
  todos: filteredTodos(state.todo, state.filter),
  filter: state.filter,
});

const Message = ({ filter }) => {
  let text;
  switch (filter) {
    case ActionTypes.FILTER_COMPLETED:
      text = "Everything's still on the to-do list... because who likes finishing things anyway?";
      break;
    case ActionTypes.FILTER_ACTIVE:
      text = "Mission accomplished: nothing to do... or maybe just nothing completed yet!";
      break;
    default:
      text = "The to-do list is as empty as Walter White's conscience.";
      break;
  }
  return <div className="row flex-center margin-top-large">{text}</div>;
};

const ToDoList = ({ todos, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTodos = todos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(todos.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {todos.length === 0 && <Message filter={filter} />}
      <List className="child-borders">
        {currentTodos.map((todo, index) => (
          <ToDo className="row" key={todo.id} {...todo} count={index + 1 + indexOfFirstItem} />
        ))}
      </List>
      <PaginationControls>
        <button className="paper-btn btn-small" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="paper-btn btn-small" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </PaginationControls>
      <Filter todosLength={todos.length} filter={filter} />
    </div>
  );
};

export default connect(mapStateToProps)(ToDoList);