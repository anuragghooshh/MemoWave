import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ToDo from './ToDo';

const List = styled.ul`
    padding-left: 0
`;

const mapStateToProps = (state) => {
    return {
        todos: state.todo,
    }
}

const ToDoList = ({todos}) => {
    return (
        <div>
            <div className="row flex-center margin-top-medium">Good Day!</div>
            <List className="child-borders">
                {todos.map((todo,index) =>
                    <ToDo
                        className="row"
                        key={todo.id}
                        {...todo}
                        count={index + 1}
                    />
                )}
            </List>
        </div>        
    );
}

export default connect(mapStateToProps)(ToDoList);