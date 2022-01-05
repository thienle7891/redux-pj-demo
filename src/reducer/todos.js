
import storage from "../util/storage";

const initialState = {
    list: storage.get(),
    filterType: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        complete: todo => todo.completed
    },
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO' : {
            const newList = [...state.list];
            newList.push(action.payload);
            storage.set(newList);
            return {
                ...state,
                list: newList
            };   
        }
        case 'TOGGLE_CHECKBOX' : {
            const newList = [...state.list];
            newList[action.payload].completed = !newList[action.payload].completed;
            storage.set(newList);
            return {
                ...state,
                list: newList
            };   
        }
        case 'DELETE_TODO' : {
            const newList = [...state.list];
            newList.splice(action.payload, 1)
            storage.set(newList);
            return {
                ...state,
                list: newList
            };   
        }
        case 'EDIT_TODO' : {
            const newList = [...state.list];
            
            newList[action.payload.index].title =  action.payload.title
            newList[action.payload.index].completed = false;
            storage.set(newList);
            return {
                ...state,
                list: newList
            };   
        }
        case 'SET_FILTER' : {
            // const newFilter = [...state];
            // newFilter.filterType = action.payload
            // console.log(action.payload);
            return {
                ...state,
                filterType: action.payload
            };   
        }
        default:
            return state;
    }
}

export default todosReducer;