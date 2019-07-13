import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodoList = props => {
    console.log('TodoList', props)
    return (
        <div className="todo-list">
            {props.todos.map((item) => (
                <TodoItem key={item.id} item={item} />
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