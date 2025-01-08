import React, {useState} from 'react';

function ObjectUpdater(){
    const [obj, setObj] = useState({name: "John", 
                                    age: 30, 
                                    address : "123 Main St"
                                   });

    function handleNameChange(event){
        setObj(prevObj => ({...prevObj, name: event.target.value}));
    }

    function handleAgeChange(event){
        setObj(prevObj => ({...prevObj, age: parseInt(event.target.value)}));
    }

    function handleAddressChange(event){
        setObj(prevObj => ({...prevObj, address: event.target.value}));
    }

    return (
        <>
            <h1>Person data: {obj.name} - {obj.address} - {obj.age}</h1>
            <input type="text" value={obj.name} onChange={handleNameChange}/>
            <input type="number" value={obj.age} onChange={handleAgeChange}/>
            <input type="text" value={obj.address} onChange={handleAddressChange}/>
        </>
    );
}


export default ObjectUpdater;