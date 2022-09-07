import './App.css';
import Message from "./Message"
  
function App() {
  let name = "Костя";

  return (
      <div>
        <Message name = {name}/>
      </div>
  );

}

export default App;
