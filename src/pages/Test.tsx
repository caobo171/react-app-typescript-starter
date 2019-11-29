import React from 'react'
import { add } from '@/store/math/functions'
import { useNumber } from '@/store/math/hooks'

const Test = ()=>{
    const value = useNumber()
    return <div>
        <button onClick = {()=> add(3)}>Testing button</button>
        <div>
            <h1>{value}</h1>
        </div>
    </div>
}

export default Test