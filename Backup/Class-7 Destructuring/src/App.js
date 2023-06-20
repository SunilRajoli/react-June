import Profile from "./components/Profile";
import Greet from "./components/Greet"
import Resume from "./components/Resume"

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <hr />
      <Profile firstName = "Rajoli" lastName = "Sunil"/>

      <Greet active = "Kapil carg" activeStatus = "CSEEE"/>

      <Resume active = "Karll" activeStatus = "cargg"/>
    </div>
  );
}

export default App;
