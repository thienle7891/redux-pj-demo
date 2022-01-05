import todosReducer from "./todos";
import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
    todos: todosReducer,
    user: userReducer,
});

export default rootReducer;