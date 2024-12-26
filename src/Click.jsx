function Clicker(props){

    const handleClick = () => console.log("clicked");

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => props.method(e, "kene")}>Call parent method with data</button>
        </>
    );
}

export default Clicker;