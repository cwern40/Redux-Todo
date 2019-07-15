import React from 'react';

const TodoItem = props => {
    return (
        <div>
            {props.item.value}
        </div>
    )
}

export default TodoItem;