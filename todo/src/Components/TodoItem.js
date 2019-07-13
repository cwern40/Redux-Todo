import React from 'react';

const TodoItem = props => {
    console.log('Todo Item', props);
    return (
        <div>
            {props.item.value}
        </div>
    )
}

export default TodoItem;