import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import CallbackChild from './Callbackchild';

const Callback = () => {
    const [count, setCount] = useState (0);
    const [sum, setSum] = useState (0);
    
    // const sumFunction= ()=>{
    //     setCount (prevCount => prevCount+50)
    // }

    const learning = useCallback(() => {
        setSum(sum+1)
      }, [count]);
  return (
    <>
      <button className='border border-gray-700 bg-black text-white rounded-lg p-3' onClick={() => setCount(count + 1)}>increase</button>
      <span>{count}</span>
      <CallbackChild learning={learning}/>
      {/* <sbutton className='border border-gray-700 bg-black text-white rounded-lg p-3' onClick={sum}>Click to sum 50</sbutton> */}
      <span>{sum}</span>
    </>
  )
}

export default Callback
