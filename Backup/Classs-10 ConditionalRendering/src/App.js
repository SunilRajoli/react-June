import ConditionalComponent from "./components/ConditionalComponent";
import CondComponentsusingElements from "./components/CondComponentsusingElements";
import TernaryConditional from "./components/TernaryConditional";
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <hr />
      <ConditionalComponent />
      <br />
      <CondComponentsusingElements />
      <br />
      <TernaryConditional />
    </div>
  );
}

export default App;
