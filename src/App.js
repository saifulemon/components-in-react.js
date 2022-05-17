import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello React.JS
         <br />
         <br />
         I'm very Hungry 
        </p>

        <Person></Person>
        <Person></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}

function Person () {
  const personStyle = {
    border: '2px solid yellow',
    margin: '10px',
    padding: '5px'
  }
  return(
    <div style = {personStyle}>
      <h1>Name: Sakib Al Hasan</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
