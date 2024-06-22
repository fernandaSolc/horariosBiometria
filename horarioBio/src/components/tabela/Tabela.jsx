import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Tabela.css'

// Componente para renderizar a tabela
const Tabela = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua o fetch com a chamada real à API para obter os dados do banco de dados
        const response = await fetch('/api/dados'); // Altere a URL para a API real
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr className='titulos1'>
            <th>Nome</th>
            <th>Hora</th>
            <th>Data</th>
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