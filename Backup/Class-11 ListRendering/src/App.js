import Product from "./components/listRendering";
import Keys from "./components/keys";
import Object from "./components/objeRendering";
import Fruits from "./components/renderingArrays";
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <hr />
      <Product />
      <hr />
      <Keys />
      <hr />
      <Object />
      <hr />
      <Fruits />
    </div>
  );
}

export default App;
