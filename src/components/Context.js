import React, { createContext } from 'react'
import ContextChild from './ContextChild';


const data = createContext();
const data1 = createContext();
const data2 = createContext();
const Context = () => {
    const name = "Ghulam Mohiudin"
    const age = 21
    const gender = "male"
  return (
    <>
    <data.Provider value={name}>
        <data1.Provider value={gender}>
            <data2.Provider value={age}>
                <ContextChild/>     
            </data2.Provider>
        </data1.Provider>
    </data.Provider>  
    </>
  )
}

export default Context
export {data, data1, data2};
