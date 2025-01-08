import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState('Hello World');
    const [counter, setCounter] = useState(0);

    return (
        <div>
           
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>

            <button onClick={() => setCounter(counter - 1)}>Decrement Counter</button>

            <button onClick={() => setCounter(0)}>Reset Counter</button>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <h2>You clicked {counter} times</h2>

            <button onClick={() => setName('Hello World')}>Reset Name</button>

            <h2>Name: {name}</h2>

            <button onClick={() => setName('Hello Universe')}>Change Name</button>

            <h2>Name: {name}</h2>

            <button onClick={() => setName('Hello World')}>Reset Name</button>
        </div>
    )
}

export default MyComponent;