import 'react';
import Quadrado from './components/painel/Painel.jsx';
import Cabecalho from './components/header/Header.jsx';
import './App.css';
import download from './assets/download.svg'

const App = () => {
  return (
    <>
      <Cabecalho />
      <div className='download'> 
      <img src={download}></img><button className='botao1'><h4>Download</h4> </button>
      </div>
    <div className="App">
      <Quadrado />
    </div>
    </>
  );
};

export default App;