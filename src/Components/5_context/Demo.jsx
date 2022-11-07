import React, { useState } from 'react'
import './Demo.css'
export const UserContext = React.createContext();


export default function Demo() {

    const [age, setAge] = useState(25)
    const [name, setName] = useState('longy')
    return (
        <div className='parent'>
            <UserContext.Provider value={{ name: name, age: age, haha: "312" }}>
                <h3>I am A component</h3>
                <h4>My username : {name}</h4>
                <B />
            </UserContext.Provider>
        </div>
    )
}


function B() {

    const things = React.useContext(UserContext)

    return (
        <div className='Child'>
            <h3>I am B component</h3>
            <h4>Get username from A: {things.name}</h4>
            <h4>Get age from A: {things.age}</h4>
            <C />
        </div>
    )
}



function C() {
    const things = React.useContext(UserContext)
    return (
        <div className='grandChild'>
            <h3>I am C component</h3>
            <UserContext.Consumer>
                {
                    value => {
                        return `my name :${value.name}, my age: ${value.age}`
                    }
                }
            </UserContext.Consumer>

        </div>
    )
}

