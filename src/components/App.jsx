import React from "react";
import styled from "styled-components";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const Container = styled.div`
  background-color: #f1f1f1;
  margin: 0;
  min-height: 100vh;
`;

const Paper = styled.div`
  width: 100% !important;
  max-width: 480px;
  background-color: white;
  min-height: 100%;
`;

function App() {
  return (
    <Container className="row flex-center flex-middle">
      <Paper className="border border-primary padding-small margin-small no-responsive">
        <h3 className="margin-small">MemoWave</h3>
        <AddToDo />
        <ToDoList/>
      </Paper>
    </Container>
  );
}

export default App;