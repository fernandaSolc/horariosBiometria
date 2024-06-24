import './Painel.css';
import Tabela from '../tabela/Tabela.jsx'

const Quadrado = () => {
  return (
    <div className="Quadrado">
      <div className='infos'>
      <h3>Monitores</h3>
      <hr className="divisor2"></hr>
      </div>
      <Tabela />
    </div>
  );
};

export default Quadrado;