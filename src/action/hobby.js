
export const addNewTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}
export const toggleCheckbox = (indexToggle) => {
    return {
        type: 'TOGGLE_CHECKBOX',
        payload: indexToggle,
    }
}
export const deleteTodo = (indexDelete) => {
    return {
        type: 'DELETE_TODO',
        payload: indexDelete,
    }
}
export const handleEndEdit = (newTodo, indexEdit) => {
    return {
        type: 'EDIT_TODO',
        payload: {
            title: newTodo, 
            index: indexEdit
        }
    }
}

export const handleSetFilter = (type) => {
    return {
        type: 'SET_FILTER',
        payload: type,
    }
}