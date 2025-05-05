import React, { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import './styles/App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();
        const detailed = await Promise.all(
          data.results.map(p => fetch(p.url).then(r => r.json()))
        );
        setPokemons(detailed);
        setFilteredPokemons(detailed);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (typeFilter === 'All' || p.types.some(t => t.type.name === typeFilter.toLowerCase()))
    );
    setFilteredPokemons(filtered);
  }, [searchTerm, typeFilter, pokemons]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app-container">
      <header><h1>Pokémon Explorer</h1></header>
      <div className="filters">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <TypeFilter value={typeFilter} onChange={setTypeFilter} />
      </div>
      <div className="pokemon-list">
        {filteredPokemons.length ? (
          filteredPokemons.map(p => <PokemonCard key={p.id} pokemon={p} />)
        ) : (
          <div className="no-results">No Pokémon Found</div>
        )}
      </div>
    </div>
  );
}

export default App;
