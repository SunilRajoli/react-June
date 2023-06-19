import Message from "./components/classProps";
import Props from "./components/funcProps"

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <hr />
      <Props name = "Sunil" lastName = "Jushhu"/>
      <Props name = "Rajoli"/>
      <Props name = "Rajesh"/>
      <hr />
      <Message messageContent = "This is a Message" />
    </div>
  );
}

export default App;
