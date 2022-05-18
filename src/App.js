import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Bappi', 'Shuvo'];
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$65.21'},
    {name: 'PDF Reader', price: '$6.00'},
    {name: 'Skype', price: '$10.00'}
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Person name="Tamim Iqbal" status="Batesman"></Person>
        <Person name="Mushfiqur Rahim" status="Batesman & wicket kipper"></Person>
        <Person name="Mostafizur Rahman" status="Boller"></Person>
      </header>
    </div>
  );
}

function Counter () {
const [count, setCount] = useState(0);
const handleClick = () => setCount(count + 1);
const handleClick2 = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleClick2}>Decrease</button>
    </div>
  )
}

function Users () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
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
