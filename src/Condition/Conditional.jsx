function Condition(props){
    if(props.isLoggedIn){
        return (
            <h2>Welcome {props.user}</h2>
        );
    }else{
        return (
            <h2>Please login</h2>
        );
    }
}

export default Condition;