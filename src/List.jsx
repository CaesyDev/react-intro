import PropTypes from "prop-types";
function List(props){
    const items = props.items
    items.sort((a,b) => b.name.localeCompare(a.name));
    const listItems = items.map((item) => <li key={item.id}>{item.name} : {item.cal}</li>);

    return (
        <>
            <h2>{props.title}</h2>
            <ol>{listItems}</ol>
        </>
    );
}

List.propType = {
    items : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        name : PropTypes.string.isRequired,
        cal : PropTypes.number.isRequired
    })).isRequired
}


List.defaultProps = {
    items : [],
    title : "Category"
};

export default List;