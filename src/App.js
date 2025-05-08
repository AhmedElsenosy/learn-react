// import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import WelcomeE from './Components/WelcomeE';
import Product from './Components/Product';
import Name from './Components/Name';
import Form from './Components/Form';
import FormClass from './Components/FormClass';
import List from './Components/List'
import { useState } from 'react';
import ProductsList from './Components/ProductsList';

function App() {
  // const first_name = 'Ahmed';
  // const last_name = 'Elsenosy';
  // // const name = prompt('Enter your name:')

  // function full_name(first, last){
  //   return <h2>hello, {first} {last}</h2>;
  // }

  const [isLogedIn, setLogedIn] = useState(false);
  let element;


  if (isLogedIn){
    element = <h1>You are loged in</h1>
  }
  else{
    element = <h1>You aren't loged in</h1>
  }

  return ( 
    <div className="App">
      {/* <h1>Hello react app</h1>
      <button onClick={() => setLogedIn(true)}>Login</button>
      {element} */}
      <ProductsList />




      {/* {full_name(first_name, last_name)} */}
      {/* <Welcome name='Ahmed' age='20' />
      <Welcome name='Youssef' age='19' /> */}
      {/* <WelcomeE name='Ahmed' />  */}
      {/* <Product name='Phone' description='A good phone' price='2000$' />
      <Product name='ipad' description='A good ipad' price='1000$' />
      <Product name='laptop' description='A good laptop' price='4000$' /> */}
      {/* <Name /> */}
      {/* <Form /> */}
      {/* <FormClass /> */}
    </div>
  );
}

export default App;
