import React from 'react';
import '../styles/TypeFilter.css';

const types = [
  'All', 'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
  'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug',
  'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'
];

function TypeFilter({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="type-filter">
      {types.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
}

export default TypeFilter;
