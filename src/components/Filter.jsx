import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import setFilter from '../actions/setFilter';
import clearTodos from '../actions/clearTodos';
import ActionTypes from '../constants';

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (e) => dispatch(setFilter(e.target.value)),
        onClickClear: (e) => dispatch(clearTodos())
    }
}

const Dropdown = styled.div`
    margin: 3em 0 0 0;
`;

const Filter = ({todosLength, filter, onChangeFilter, onClickClear}) => {
    return (
        <Dropdown className="row flex-edges">
            <div className="padding-small">
                <button className="btn-small" style={todosLength ? {} : {display: 'none'}} onClick={onClickClear}>Clear</button>
            </div>
            <div className="padding-small">
                <div className="row flex-right margin-none">
                    <span className="padding-right-small">Show:</span>
                    <select onChange={onChangeFilter} value={filter}>
                        <option value={ActionTypes.FILTER_ALL}>All</option>
                        <option value={ActionTypes.FILTER_ACTIVE}>Active</option>
                        <option value={ActionTypes.FILTER_COMPLETED}>Completed</option>
                    </select>
                </div>                
            </div>            
        </Dropdown>        
    );
}

export default connect(null, mapDispatchToProps)(Filter);