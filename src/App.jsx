import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button"
import Student from "./Student/Student";
import Condition from "./Condition/Conditional";
import List from "./List";
import Clicker from "./Click";
import MyComponent from "./UseState";
function App() {

  const fruits = [
    { name: "apple", cal: 900, id: 1 },
    { name: "banana", cal: 30, id: 2 },
    { name: "pineapple", cal: 280, id: 3 },
    { name: "orange", cal: 190, id: 4 },
    { name: "watermelon", cal: 890, id: 5 }
  ];

  const parentMethod = (e, data) => {
    console.log(e);
    alert("Parent method called with data: " + data);
  }

  return (
    <>
      <Header></Header>
      <Food />
      <Card></Card>
      <Student name="Howell" age={30} isStudent={true}></Student>
      <Student name="Helen" age={25} isStudent={true}></Student>
      <Student />
      <Condition isLoggedIn={false} user="Kene"></Condition>
      {fruits.length > 0 && <List title="Fruits" items={fruits} />}
      <Button></Button>
      <Clicker method={parentMethod}></Clicker>
      <MyComponent></MyComponent>
      <Footer></Footer>
    </>
  );
}

export default App
