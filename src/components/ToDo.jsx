import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import toggleToDo from '../actions/toggleToDo';

const mapDispatchToProps = (dispatch) => ({
  onItemClick: (id) => dispatch(toggleToDo(id)),
});

const Item = styled.li`
  padding-left: 1em;
  cursor: pointer;
  overflow-wrap: break-word;
  &:before {
    content: "";
  }
  text-decoration: ${({ completed }) => (completed == 'true' ? 'line-through' : 'none')};
`;

const ToDo = ({ id, text, completed, onItemClick, count }) => (
  <Item
    className={`padding-small margin-small ${completed ? 'background-primary' : 'shadow shadow-hover'}`}
    key={id}
    onClick={() => onItemClick(id)}
    completed={`${completed}`}
  >
    {count} - {text}
  </Item>
);

export default connect(null, mapDispatchToProps)(ToDo);