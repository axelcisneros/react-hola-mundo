import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
    const element = (
      <div className="App">
        <header className="App-header">
          <h1>La hora es:</h1>
          <h2>En México: {new Date().toLocaleTimeString("es-MX")}</h2>
          <p>Hola Mundo!!!!!!</p>
        </header>
      </div>
    );

  root.render(element)
}

export default App;
