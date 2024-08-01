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

const Header = styled.header`
  margin: 20px 0;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

const H4 = styled.h4`
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Container className="row flex-center flex-middle">
      <Paper className="border border-primary padding-small margin-small no-responsive">
        <Header className="header">
          <H4>MemoWave</H4>
          <Paragraph>By Anurag!</Paragraph>
        </Header>
        <AddToDo />
        <ToDoList />
      </Paper>
    </Container>
  );
}

export default App;
