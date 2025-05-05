import React from 'react';
import '../styles/PokemonCard.css';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>ID: {pokemon.id}</p>
      <div className="types">
        {pokemon.types.map(t => (
          <span key={t.slot} className={`type ${t.type.name}`}>
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
