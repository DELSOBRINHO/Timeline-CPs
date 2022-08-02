import logo from './logo.svg';
import './App.css';
import banner from './componentes/banner/banner';


function App() {
  return (
    <div className="App">
      <banner /> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu primeiro app com React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
