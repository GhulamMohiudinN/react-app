import React, { useRef, useEffect } from 'react';

const SimpleRefExample = () => {
  const inputRef = useRef(null);
console.log(inputRef);
  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current.focus());
  }, []);

  return (
    <div>
      <h2>Simple useRef Example</h2>
      <input type="text" ref={inputRef} />
      <p>Start typing, the input is focused automatically!</p>
    </div>
  );
};

export default SimpleRefExample;

