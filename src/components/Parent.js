import React from 'react';
import Child from './Child';

const Parent = () => {
  const messageFromParent = "Hello from parent!";
  return (
    <>
      <h2>Parent Component</h2>
      <Child message={messageFromParent} />
    </>
  );
};

export default Parent;
