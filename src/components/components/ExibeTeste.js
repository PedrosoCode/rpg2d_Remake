import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExibeTeste = () => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function fetchItens() {
      try {
        const response = await axios.get('http://localhost:5000/exibir-itens');
        setItens(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    }

    fetchItens();
  }, []);

  return (
    <div>
      <h2>Itens</h2>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            <strong>Nome:</strong> {item.name} | 
            <strong> Tipo:</strong> {item.type} | 
            <strong> Custo:</strong> {item.cost} | 
            <strong> Peso:</strong> {item.weight} | 
            <strong> Raridade:</strong> {item.rarity} | 
            <strong> Efeito:</strong> {item.effect} | 
            <strong> Tags:</strong> {item.tags}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExibeTeste;
