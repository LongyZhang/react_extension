import React from 'react'
import { useState } from 'react'
import './Demo.css'

export default function A() {
    console.log("parent");
    const [car, setCar] = useState("subaru")

    const f1 = () => {
        setCar(car => ("BMW"))
    }

    return (
        <div className='parent'>
            <h3>I am parent component</h3>
            <span>My car is {car}</span>
            <br />
            <button onClick={f1}> Click </button>
            <B carName={car} />
        </div>
    )
}

// const B = (props => {
//     console.log("child");
//     return (
//         <div className='child'>
//             <h3>I am child component</h3>
//             <span>{props.carName}</span>
//         </div>
//     )
// })

const B = React.memo((props) => {
    console.log("child");

    return (
        <div className='child'>
            <h3>I am child component</h3>
            <span>{props.carName}</span>
        </div>
    )
})

// function B() {
//     console.log("child");
//     return (
//         <div className='child'>
//             <h3>I am child component</h3>
//             {/* <span>{props.carName}</span> */}
//         </div>
//     )
// }

// import React from 'react'

// export const Demo = () => {
//     return (
//         <div>Demo</div>
//     )
// }

