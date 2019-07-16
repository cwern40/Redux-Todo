import { ADD_TODO, TOGGLE_COMPLETE } from './Action';

const initialState = {
    todos: [
        {
            value: 'Homework',
            completed: false,
        },
        {
            value: 'Clean my room',
            completed: false,
        }
    ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { value, completed } = action.payload
            const newTodo = {value, completed}

            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        }
        case TOGGLE_COMPLETE: {
            const index = action.payload
            const newList = state.todos.map((item, i) => {
                if(i === index) {
                  const newObj = {
                    ...item,
                    value: item.value,
                    completed: !item.completed
                  };
                  console.log(newObj);
                  return newObj;
                } else {
                  return item;
                }
              });
              console.log(newList)
            return {
                ...state,
                todos: newList
            }
        }

        default: return state
    }
}