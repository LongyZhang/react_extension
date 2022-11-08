import React, { useState } from 'react'

export default function Child() {



    const [user, setUser] = useState(
        [{ id: '001', name: 'longy', age: 18 },
        { id: '002', name: 'longy', age: 18 },
        { id: '003', name: 'longy', age: 18 }])

    return (
        <div>
            {user.map((obj) => {
                return <h4 key={obj.id}>{obj.age} , {obj.id},{obj.name}</h4>
            })}
        </div>
    )
}
