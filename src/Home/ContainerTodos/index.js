import { useState } from "react";
import TodosList from "../TodosList";


function ContainerTodos({typeFt}) {
    
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            {TodosList({typeFt})}
        </section>
    )
}

export default ContainerTodos;