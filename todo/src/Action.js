export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export function addTodo(value, completed) {
    return {
        type: ADD_TODO,
        payload: {
            value,
            completed,
        }
    }
}

export function toggleComplete(index) {
    return{
        type: TOGGLE_COMPLETE,
        payload: {
            index,
        }
    }
}