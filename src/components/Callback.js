import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import CallbackChild from './Callbackchild';

const Callback = () => {
    const [count, setCount] = useState (0);
    const [sum, setSum] = useState (0);


    const learning = useCallback(() => {
        setSum(sum+1)
        setCount(count+10)
      }, [sum]);
  return (
    <>
      <button 
      className='border border-gray-700 bg-black text-white rounded-lg p-3' 
      onClick={() => setCount(count + 1)}>
      increase
      </button>
      <span>{count} this is count vairable</span>
      <CallbackChild learning={learning}/>
      <span>{sum}</span>
    </>
  )
}

export default Callback
