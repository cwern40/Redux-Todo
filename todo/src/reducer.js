import { ADD_TODO } from './Action';

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

        default: return state
    }
}