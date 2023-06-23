import StylesheetComponent from "./components/StylesheetComponent";
import InlineComponent from "./components/InlineComponent";
import ModuleComponents from "./components/ModuleComponent";
function App() {
  return (
    <div className="App">
      <InlineComponent /> <br /> <hr />
      <StylesheetComponent /> <br /><hr />
      <ModuleComponents />
    </div>
  );
}

export default App;
