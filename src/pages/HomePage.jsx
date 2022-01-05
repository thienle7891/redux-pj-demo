

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderTodos from '../Home/HeaderTodos';
import ContainerTodos from '../Home/ContainerTodos';
import FooterTodos from '../Home/FooterTodos';




function HomePage (props) {
    const [typeFt, setTypeFt] = useState('all')

    return (
        <div className="todoapp">
            <HeaderTodos/>
            <ContainerTodos typeFt={typeFt}/>
            <FooterTodos clickFilter={setTypeFt}/>
        </div>
    )
}

export default HomePage;