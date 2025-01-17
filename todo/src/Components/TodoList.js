import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import './Todo.css';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map((item, i) => (
                <TodoItem key={i} item={item} index={i}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);