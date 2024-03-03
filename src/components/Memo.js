import React from 'react';
import { useState, useMemo } from 'react';

const Memo = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);
    

    const multiplication = useMemo (function multiply() {
        console.log('function is called !')
        return add*10;
    }, [add])

  return (
    <>
      <div>
        <p>{multiplication}</p>
        <button className='border border-black p-3 text-green-600' onClick={() => setAdd( add + 1 )}>Increment</button>
        <p>{add}</p>
        <br/>
        <button className='border border-black p-3 text-red-600' onClick={() => setMinus( minus - 1 )}>Decrement</button>
        <p>{minus}</p>
      </div>
    </>
  )
}

export default Memo
