import React, {useEffect, useState} from 'react'

const Examples = () => {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState (['item1']);
    const [userInfo, setUserInfo] = useState({name:'', age:0});
    const [data , setData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []); // empty dependency array to run the effect only once
  return (
    <>
    <strong>EXAMPLE # 1: COUNTER</strong>
      <p>The Current Count is: {count}</p>
      <button className='p-4 bg-red-600' onClick={() => setCount(count + 1)}>Increment button</button>
      <button className='p-4 bg-orange-600' onClick={() => setCount(count - 1)}>Decrement button</button>
      <br/><br />

      {/* ****************************************************************************************************** */}
    <strong>EXAMPLE # 2: BOOLEAN VALUE RETRIVIED</strong> 
      <p>The Is Active statis {isActive.toString()}</p>
      <button className='p-4 bg-yellow-600' onClick={() => setIsActive(!isActive)}>Toggle Active States</button>
      <br/><br />

      {/* ************************************************************************************************************* */}
    <strong>EXAMPLE # 3: CONTROL INPUT FIELD</strong>
    <br/>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter your name..."/>
      <p className='p-4 bg-lime-500'>Your name is: {inputValue}</p>
      <br/><br />

       {/* ************************************************************************************************************* */}
    <strong>EXAMPLE # 4: MANAGE AN ARRAY STATE</strong>   
      <ul>
        {items.map((item, index) => (
            <li className="p-4 bg-cyan-600" key={index}>{item}</li>
        ))}
      </ul>
      <button className="p-4 bg-purple-500" onClick={() => setItems([...items, `items${items.length + 1}`])}>Add Item</button>
      <br /><br/>

       {/* ************************************************************************************************************* */}
    <strong>EXAMPLE # 5: MANAGE AN OBJECT STATE</strong>
      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
      <button className="p-4 bg-amber-500" onClick={() => setUserInfo({name: 'Ghulam Mohiudin', age: 21})}>Set user info</button>
      <br /><br/>

       {/* ************************************************************************************************************* */}
    <strong>EXAMPLE # 6: API Fetch</strong>
    <p>Data: {data ? JSON.stringify(data) : 'Loading...'}</p>
    <br /><br />

    {/* ************************************************************************************************************* */}
    <strong>EXAMPLE # 7: CONDITIONAL DISPLAY CONTENT</strong>
    {isLoggedIn ? <p className='bg-green-400'>Welcome User ! </p> : <p className='bg-red-500'>Please Login You are now here.</p>}
    <button className="p-4 bg-teal-500" onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
    <br /><br />

    {/* ************************************************************************************************ */}
    <strong>EXAMPLE # 8: MULTIPLE INPUT FIELDS VALUE</strong>
    <input className='border-2 border-black' type="text" value={name} placeholder='Enter your name...' onChange={(e) => setName(e.target.value)}/>
    <input className='border-2 border-black' type="email" value={email} placeholder='enter your email' onChange={(e) => setEmail(e.target.value)}/>
    <input className='border-2 border-black' type="password" value={password} placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)}/>
    <div className='p-4 bg-gray-700 text-white'> 
        <p>NAME: {name}</p>
        <p>EMAIL: {email}</p>
        <p>PASSWORD: {password}</p>
    </div>
    </>

  );
};

export default Examples
