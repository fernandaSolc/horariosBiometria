import './header.css';
import logo from '../../assets/logo.svg';


const Cabecalho = () => {
  return (
    <div className="header">
      <div className='logo'>
        <img src={logo}></img>
        </div>
      <div className='titulo'>
        <h1>Horário de Chegada</h1>
        <hr className="divisor"></hr>
        <div className='download'>
        </div>
      </div>
    </div>
  );
};
export default Cabecalho;