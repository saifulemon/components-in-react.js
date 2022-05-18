import logo from './logo.svg';
import './App.css';

function App () {
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$65.21'},
    {name: 'PDF Reader', price: '$6.00'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <Person name="Tamim Iqbal" status="Batesman"></Person>
        <Person name="Mushfiqur Rahim" status="Batesman & wicket kipper"></Person>
        <Person name="Mostafizur Rahman" status="Boller"></Person>
      </header>
    </div>
  );
}

function Product (props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: 'auto',
    width: '200px',
    float: 'left'
  }

  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
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
