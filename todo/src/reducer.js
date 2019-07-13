import { ADD_TODO } from './Action';

const initialState = {
    todos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { value, completed } = action.payload

            return {
                ...state,
                todo: {
                    value,
                    completed,
                }
            }
        }

        default: return state
    }
}