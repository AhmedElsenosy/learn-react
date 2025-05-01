import logo from './logo.svg';
import './App.css';

function App() {
  const first_name = 'Ahmed';
  const last_name = 'Elsenosy';

  function full_name(first, last){
    return <h2>hello, {first} {last}</h2>;
  }
  return (
    <div className="App">
      <h1>hello react app</h1>
      {full_name(first_name, last_name)}
    </div>
  );
}

export default App;
