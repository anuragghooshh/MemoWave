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
  width: 480px !important;
  background-color: white;
`;

function App() {
  return (
    <Container className="row flex-center flex-middle">
      <Paper className="border border-primary padding-large margin-large no-responsive">
        <h3 className="margin-small">MemoWave</h3>
        <AddToDo />
        <ToDoList/>
      </Paper>
    </Container>
  );
}

export default App;