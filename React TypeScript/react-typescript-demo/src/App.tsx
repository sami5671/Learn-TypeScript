import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";

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
    </div>
  );
}

export default App;
