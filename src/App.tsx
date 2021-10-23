import React from 'react';
import './App.css';
import { StreamLinks } from './components/StreamLinks';
import cover from './images/pasta_russa_2021_400px.jpg';

function App() {
  return (
    <div className="pasta-russa">
      <img src={cover} className="album-cover" alt="album cover" />
      <div className="album-info">
        <div className="album-name">
          <h2>Pasta Russa</h2>
          <p>2021</p>
        </div>
        <StreamLinks />
      </div>
    </div>
  );
}

export default App;
