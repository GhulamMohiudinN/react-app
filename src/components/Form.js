import React, { useState } from 'react'

const Form = () => {
    const [name , setName] = useState ('');
    const [email , setEmail] = useState ('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
  return (
    <>
      <form>
        <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange}/>
        </label>
        <br/>
        <label>
            E-mail:
            <input type="text" value={email} onChange={handleEmailChange}/>
        </label>
      </form>
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </>
  )
}

export default Form;
