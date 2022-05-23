import './App.css';
import ToDo from './Images/pngpng.png'
import Lista from './Components/Lista.js';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={ToDo} 
        className='freecodecamp-logo'
        alt='Logo App' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
