import Quadrado from './components/painel/Painel.jsx';
import Cabecalho from './components/header/Header.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <Cabecalho />
    <div className="App">
      <Quadrado />
    </div>
    </>
  );
};

export default App;