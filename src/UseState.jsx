import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState('Hello World');

    const updateName = () => {
        setName('React is awesome');
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={updateName}>Update Name</button>
        </div>
    )
}

export default MyComponent;