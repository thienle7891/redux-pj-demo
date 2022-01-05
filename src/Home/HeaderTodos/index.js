

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../action/hobby';



function Header(props) {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        if (e.key === 'Enter') {
            const newTodo = {
                title: todo,
                completed: false,
            };

            const action = addNewTodo(newTodo)
            dispatch(action)
            setTodo('')
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" 
                placeholder="What needs to be done?" 
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyPress={handleAddTodo}
             />
        </header>
    )
}

export default Header;