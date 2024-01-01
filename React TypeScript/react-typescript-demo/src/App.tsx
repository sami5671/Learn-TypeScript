import Button from "./Components/Button";
import EventButton from "./Components/EventButton";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Oscar from "./Components/Oscar";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";

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
    </div>
  );
}

export default App;
