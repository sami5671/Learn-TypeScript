import Button from "./Components/Button";
import Container from "./Components/Container";
import Box from "./Components/Context/Box";
import ThemeContext from "./Components/Context/ThemeContext";
import UserContextProvider from "./Components/Context/UserContextProvider";
import EventButton from "./Components/EventButton";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Oscar from "./Components/Oscar";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Counter from "./Components/State/Counter";
import Login from "./Components/State/Login";
import User from "./Components/State/User";
import Status from "./Components/Status";
import User2 from "./Components/Context/User2";
import DomRef from "./Components/Ref/DomRef";
import MutableRef from "./Components/Ref/MutableRef";

function App() {
  // =================================================================
  const personName = {
    first: "Sami",
    last: "Alam",
  };

  const nameList = [
    {
      first: "Sojib",
      last: "Hossain",
    },
    {
      first: "yeamin",
      last: "prince",
    },
    {
      first: "riduan",
      last: "jayed",
    },
  ];
  // =================================================================
  return (
    <div className="App">
      <Greet name="MD. SAMI ALAM" messageCount={50} isLoggedIn={true}></Greet>
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
      <Status status="loading"></Status>
      <Heading>Placeholder text its a children prop</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo disparico</Heading>
      </Oscar>

      {/* optional props */}
      <Greet name="jhon" isLoggedIn={true}></Greet>
      {/* Event Props */}
      <Button handleClick={() => console.log("Button has clicked")}></Button>
      {/* Event props send  */}
      <EventButton
        handleClick={(event, id) =>
          console.log("Event Button has clicked", event, id)
        }
      ></EventButton>
      <Input value="" handleChange={(event) => console.log(event)}></Input>

      {/* style props  */}
      <Container
        style={{ border: "1px solid black", padding: "1rem" }}
      ></Container>

      {/* useState  */}
      <Login></Login>

      <User></User>

      {/* useReducer */}
      <Counter></Counter>

      {/* useContext */}
      <ThemeContext>
        <Box></Box>
      </ThemeContext>

      <UserContextProvider>
        <User2></User2>
      </UserContextProvider>

      {/* useRef hook */}

      <DomRef></DomRef>
      <MutableRef></MutableRef>
    </div>
  );
}

export default App;
