// import React, { Component } from 'react'

// export default class Demo extends Component {
//     state = { count: 0 }

//     f1 = () => {
//         this.setState(state => ({ count: state.count + 1 }))

//     }
//     render() {
//         return (
//             <div>
//                 <h2>current sum :{this.state.count}</h2>
//                 <button onClick={this.f1}>Click+1</button>
//             </div>
//         )
//     }
// }

import React from 'react'
import { useState } from 'react'

export default function Demo() {

    const [count, setCount] = React.useState({ name: 'longy', age: 0 })
    // console.log(count);

    const [name, setName] = useState('longy')

    // useState return an array which include two value

    // [state,updaterState]
    // console.log(a);

    const f1 = () => {
        // setCount(count + 1)

        setCount(count => ({ ...count, age: count.age + 1 }))
    }

    const f2 = () => {
        setName(name => "cao")
    }

    return (
        <div>
            <h2>current sum &nbsp;{count.age}</h2>
            <h2>Current name &nbsp;{name}</h2>
            <button onClick={f1}>click+1</button>
            <button onClick={f2}>Click Change Name</button>
        </div>
    )
}
