import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Tabela.css'
import busca from '../../assets/iconBusca.svg'
import '../../../server/data.json'

// Componente para renderizar a tabela
const Tabela = () => {
  const [dados, setDados] = useState([]);
  const [horaFilterOpen, setHoraFilterOpen] = useState(false);
  const [dataFilterOpen, setDataFilterOpen] = useState(false);
  const [pesquisa, setpesquisa] = useState();
  const funcionariosFiltrados = Funcionarios.filter((nome) => nome.startsWith(pesquisa));

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua o fetch com a chamada real à API para obter os dados do banco de dados
        const response = await fetch('api');
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);


  const toggleHoraFilter = () => {
    setHoraFilterOpen(!horaFilterOpen);
    // Adicione a lógica de filtragem de "Hora"
  };

  const toggleDataFilter = () => {
    setDataFilterOpen(!dataFilterOpen);
    // Adicione a lógica de filtragem de "Data"
  };

  return (
    <div className='tabela'>
      <table className='tab'>
        <thead>
          <tr className='titulos1'>
          <div className='busca'>
            value={pesquisa}
            <img className='icon' src={busca}></img> 
          <input className='pesquisa' onChange={(ev) => setpesquisa(ev.target.value)} placeholder='Search'></input>
          {funcionariosFiltrados.map((nome)=>
          (
            <li key={nome}>{nome}</li>
          )
          )}
           </div>
           <th className='datas'>Hora</th>
           <button className="filter-button" onClick={toggleHoraFilter}>
                <span className={`arrow ${horaFilterOpen ? 'open' : ''}`}>&#9660;</span>
              </button>
           <th className='datas'>Data</th>
           <button className="filter-button" onClick={toggleDataFilter}>
                <span className={`arrow ${dataFilterOpen ? 'open' : ''}`}>&#9660;</span>
              </button>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.horarioChegada}</td>
              <td>{item.dataHorarioChegada}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Definindo propTypes para validação das props
Tabela.propTypes = {
  dados: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      horarioChegada: PropTypes.string.isRequired,
      dataHorarioChegada: PropTypes.string.isRequired,
    })
  ),
};

export default Tabela;