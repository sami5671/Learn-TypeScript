import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
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
      <Greet name="jhon" isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
