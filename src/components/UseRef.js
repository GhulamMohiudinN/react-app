import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const [name, setName] = useState(" ")


    function reset(){
        setName("Ghulam Mohiudin")
    }
    function changeInput() {
        if (true) {
            refElement.current.style.color="blue"
        }
    }

    const refElement = useRef("")
    console.log(refElement)
  return (
    <>
      <h1>Learning about useRef</h1>

      <input type="text" 
      value={name}
      ref={refElement}
      onChange={(e) => setName(e.target.value)} 
      placeholder='enter your name' 
      />

      <button className='border border-black p-3' onClick={reset}>Autofill Name</button>
      <button className='border border-black p-3' onClick={() => setName("")}>reset Name</button>
      <button className='border border-black p-3' onClick={changeInput}>Change your name color</button>
    </>
  )
}

export default UseRef
