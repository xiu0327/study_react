import logo from './logo.svg';
import './App.css';

const Btn = () => {
  return(
    <button onClick={()=>console.log("Hi")}>Click</button>
  );
}

const Title = () =>{
  return(
    <h3 id="root" onMouseEnter={()=>console.log("yes!")}>Hello</h3>
  );
}

function App() {
  return (
    <div>
      <Title />
      <Btn />
    </div>

  );
}

export default App;
