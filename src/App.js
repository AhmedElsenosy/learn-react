// import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import WelcomeE from './Components/WelcomeE';
import Product from './Components/Product';
import Name from './Components/Name';
import Form from './Components/Form';
import FormClass from './Components/FormClass';

function App() {
  const first_name = 'Ahmed';
  const last_name = 'Elsenosy';
  // const name = prompt('Enter your name:')

  function full_name(first, last){
    return <h2>hello, {first} {last}</h2>;
  }
  return ( 
    <div className="App">
      <h1>Hello react app</h1>
      {/* {full_name(first_name, last_name)} */}
      {/* <Welcome name='Ahmed' age='20' />
      <Welcome name='Youssef' age='19' /> */}
      {/* <WelcomeE name='Ahmed' />  */}
      {/* <Product name='Phone' description='A good phone' price='2000$' />
      <Product name='ipad' description='A good ipad' price='1000$' />
      <Product name='laptop' description='A good laptop' price='4000$' /> */}
      {/* <Name /> */}
      {/* <Form /> */}
      <FormClass />
    </div>
  );
}

export default App;
