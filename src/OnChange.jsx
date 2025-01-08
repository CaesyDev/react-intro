import React, { useState } from 'react';

function Onchange() {

    const [shipping, setShipping] = useState("pick up");
    const [counter, setCounter] = useState(0);

    const updateShipping = (event) => {
        setShipping(event.target.value);
    }

    const updateCounter = () => {
        setCounter((prevCount) => {
           return prevCount + 1;
        });
    }

    return (
        <>
            <label>
                Pick up
                <input onChange={updateShipping} type="radio" value="pick up" checked={shipping === "pick up"} />
            </label>

            <label>
                Delivery
                <input onChange={updateShipping} type="radio" value="delivery" checked={shipping === "delivery"} />
            </label>

            <p>Shipping method : {shipping}</p>

            <h1>Counter: {counter}</h1>
            <button onClick={updateCounter}>Increment counter</button>
        </>
    );
}

export default Onchange;