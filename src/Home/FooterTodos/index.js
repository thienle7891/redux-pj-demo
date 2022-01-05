import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetFilter } from "../../action/hobby";


function FooterTodos({clickFilter}) {

    const todosList = useSelector(state => state.todos.list);
    const todosFilters = useSelector(state => state.todos.filters);
    const todosFilter = useSelector(state => state.todos.filterType);
    const [typeFilter, setTypeFilter] = useState('all')
    // const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const handleFilter = (type) => {
        setTypeFilter(type)
        clickFilter(type)
        console.log(todosFilter)
        // dispatch(handleSetFilter(type))
    }
    return (
        <footer className="footer">
            <span className="todo-count"><strong>0</strong> item left</span>
            <ul className="filters">
                {Object.keys(todosFilters).map((type, index)=> (
                    <li key={index} >
                        <a className={typeFilter === type ? "selected": ''}
                            onClick={() =>handleFilter(type)}
                        >{type[0].toUpperCase() + type.slice(1)}</a>
                    </li>
                ))}
                
            </ul>
            {/* Hidden if no completed items are left ↓ */}
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default FooterTodos;