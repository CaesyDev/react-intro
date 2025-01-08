import React, {useState, useEffect} from 'react';

function Effect(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `counter : ${count}`
    }, [count]);

    function updateCounter(){
        setCount( prev => prev + 1);
    }

    return (
        <div>
            <h2>Counter</h2>
            <h4>Current value : {count}</h4>
            <button onClick={updateCounter}>Increase</button>
        </div>
    );

}

export default Effect;