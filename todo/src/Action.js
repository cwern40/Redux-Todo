export const ADD_TODO = 'ADD_TODO'

export function addTodo(value, completed) {
    return {
        type: ADD_TODO,
        payload: {
            value,
            completed
        }
    }
}