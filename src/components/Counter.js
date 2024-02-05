import React, { useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count -1);
    };
    
    useEffect(() => {
      // if (count === 10){
        console.log('useStates function runs');
      // }
        
    },); 
    // [count == 10] *******************************[ ADDITIONAL ARGUMENT s]****************  
  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button className="p-5 border border-green-500 bg-yellow-400" onClick={increment}>Smash to increase counter varible</button>
        <button className="p-5 border border-green-500 bg-yellow-400" onClick={decrement}>Smash to decrease counter varibale</button>
      </div>
    </>
  );
};

export default Counter;
