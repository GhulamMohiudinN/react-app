import React from 'react'

const Callbackchild = ({learning}) => {
  return (
    <>
      <button 
      className='border border-gray-700 bg-black text-white rounded-lg p-3' 
      onClick={learning}>
      child button
      </button>
    </>
  )
}

export default Callbackchild
