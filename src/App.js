import './App.css';
import Carteles from './componentes/carteles';

function App() {
  return (
    <div className="App">
      <h1>Cantantes</h1>
      <div>
        <Carteles
          numero="1"
        />
        <Carteles
          numero="2"
        />
        <Carteles
          numero="3"
        />
      </div>
    </div>
  );
}

export default App;
