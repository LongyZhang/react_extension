// import React, { Component } from 'react'

// export default class Demo extends Component {
//     state = { count: 0 }

//     componentDidMount() {
//         setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }), () => {

//                 console.log(this.state.count);
//             })
//         }, 1000)
//     }

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

import React, { createRef, useRef } from 'react'
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react'

export default function Demo() {

    const [count, setCount] = React.useState({ name: 'longy', age: 0 })
    // console.log(count);

    const [myName, setName] = useState('longy')

    // useState return an array which include two value

    // [state,updaterState]
    // console.log(a);

    const componentDidMount = () => {
        console.log("@@");

    }


    //  the first function will be in effect when you mount this componment
    //  and also the first function will Be called when you update state


    // useEffect second parameter have listener attribute
    // Second attribute must be array type
    // if the array does not have any, it will listen all state, as long as 
    // you update the any state, it will run the function again

    // componentDidMount, we use empty array

    // useEffect(
    //     () => {
    //         console.log("didMount");
    //     },
    //     [],
    // )

    // componentDidMount and componentDidUpdate,we input state into array


    useEffect(() => {
        setInterval(() => {
            setCount(count => ({ ...count, age: count.age + 1 }))
        }, 1000);

    }, [])

    // return in here means to do some cleanup job when you needed

    // useEffect(() => {
    //     console.log("1");

    //     return () => {
    //         console.log("2");
    //     }
    // }, [count])


    // useEffect can listen mutiple state


    const myref = useRef(null)
    const f1 = () => {
        // setCount(count + 1)

        setCount(count => ({ ...count, age: count.age + 1 }))
    }

    const f2 = () => {
        setName(myName => "xima")
        setCount(count => ({ ...count, name: "cao" }))
    }

    const f3 = () => {
        console.log(myref.current.value);
        // root.unmount();
    }




    return (
        <div>
            <h2>current sum &nbsp;{count.age}</h2>
            <h2>Current name &nbsp;{count.name}</h2>
            <button onClick={f1} >click+1</button>
            <button onClick={f2}>Click Change Name</button>
            <input type="text" ref={myref} />
            <button onClick={f3}>unmount</button>
        </div>
    )
}
