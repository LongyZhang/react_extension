import React, { useState } from 'react'

import './Demo.css'

export default Demo => {
    return (
        <div className='parent'>
            <h3>I am parent</h3>

            <B render={(name) => <C thisname={name} d={123} />} />
            {/* <B x={100} /> */}
        </div>
    )
}

const B = (props) => {
    const [name, setName] = useState("longy")
    console.log(props);
    return (
        <div className='child'>
            <h3>I am child</h3>
            {props.render(name)}
            {/* <C /> */}
        </div>
    )
}

const C = (props) => {

    return (
        <div className='grandchild'>
            <h3>I am grandchild</h3>
            <h4>{props.thisname}</h4>

        </div>
    )
}

