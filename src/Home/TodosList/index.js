import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, handleEndEdit, toggleCheckbox } from "../../action/hobby";

TodoItem.propTypes = {

}

function TodoItem({typeFt}) {
    const todosList = useSelector(state => state.todos.list);
    const todosFilters = useSelector(state => state.todos.filters);
    const todosFilter = useSelector(state => state.todos.filterType);

    const dispatch = useDispatch();
    const [editIndex, setEditIndex] = useState();

    
    const startEdit = (index) => {
        setEditIndex(index);
    };
    const endEdit = (e) => {
        if (e.key === 'Enter') {
            dispatch(handleEndEdit(e.target.value, editIndex));
            setEditIndex('')
        }
    }
    
   
    return (
        <ul className="todo-list">
            {todosList
                .filter(todosFilters[typeFt])
                .map((todo, index) => (
                <li className={`${todo.completed ? "completed" : ""} 
                    ${editIndex === index && 'editing'}`} 
                    key={index}>
                    <div className="view">
                        <input className="toggle" 
                            type="checkbox"
                            checked={todo.completed ? "checked" : ""}
                            onChange={()=> dispatch(toggleCheckbox(index))}
                        />
                        <label onDoubleClick={()=> startEdit(index)}>{todo.title}</label>
                        <button className="destroy" 
                            onClick={()=> dispatch(deleteTodo(index))}
                        />
                    </div>
                    <input className="edit" 
                        defaultValue={todo.title}

                        onKeyPress={endEdit} 
                    />
                </li>
            ))}
            
        </ul>
    )
}

export default TodoItem;