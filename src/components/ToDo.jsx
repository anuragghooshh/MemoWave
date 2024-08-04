import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import toggleToDo from "../actions/toggleToDo";
import editToDo from "../actions/editToDo";
import deleteToDo from "../actions/deleteToDo";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";

const mapDispatchToProps = (dispatch) => ({
  onItemClick: (id) => dispatch(toggleToDo(id)),
  onEditClick: (id, text) => dispatch(editToDo(id, text)),
  onDeleteClick: (id) => dispatch(deleteToDo(id)),
});

const Item = styled.li`
  padding-left: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  overflow-wrap: break-word;
  &:before {
    content: "";
  }
  text-decoration: ${({ completed }) =>
    completed == "true" ? "line-through" : "none"};
`;

const Button = styled.button`
  padding: 0px;
  background-color: ${({ save }) => (save ? "#4caf50" : "#2196f3")};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${({ save }) => (save ? "#45a049" : "#1e88e5")};
  }
`;

const TextContainer = styled.div`
  flex-grow: 1;
  padding-right: 10px;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 5px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ToDo = ({
  id,
  text,
  completed,
  onItemClick,
  onEditClick,
  count,
  onDeleteClick,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(text);

  const handleEditClick = () => {
    if (isEditing) {
      onEditClick(id, newText);
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteClick = () => {
    onDeleteClick(id);
  };

  return (
    <Item
      key={id}
      completed={`${completed}`}
      className={`padding-small margin-small ${
        completed ? "background-primary" : "shadow shadow-hover"
      }`}
    >
      {isEditing ? (
        <TextInput
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEditClick}
        />
      ) : (
        <TextContainer onClick={() => onItemClick(id)}>
          {count} - {text}
        </TextContainer>
      )}
      <ButtonContainer>
        {!completed && (
          <Button
            onClick={handleEditClick}
            save={isEditing ? "true" : undefined}
          >
            {isEditing ? <BiSave /> : <BiEdit />}
          </Button>
        )}
        <Button onClick={handleDeleteClick}>
          <BiTrash />
        </Button>
      </ButtonContainer>
    </Item>
  );
};

export default connect(null, mapDispatchToProps)(ToDo);
