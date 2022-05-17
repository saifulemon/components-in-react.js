import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Tamim Iqbal" status="Batesman"></Person>
        <Person name="Mushfiqur Rahim" status="Batesman & wicket kipper"></Person>
        <Person name="Mostafizur Rahman" status="Boller"></Person>
      </header>
    </div>
  );
}

function Person (props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '10px',
    padding: '5px'
  }
  console.log(props);
  return(
    <div style = {personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Status: {props.status}</h3>
    </div>
  )
}

export default App;
