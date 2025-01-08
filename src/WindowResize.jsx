import React, {useState, useEffect} from 'react';

function WindowResize(){


    const [width, setWidth] = useState(window.innerHeight)
    const [height, setHeight] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    });

    useEffect(() => {
        document.title = `{Height: ${width} x ${height}}`
    }, [height, width])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }


    return <>
        <p>Height : {height}</p>
        <p>Width : {width}</p>
    </>
}



export default WindowResize;