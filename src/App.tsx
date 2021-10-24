import React from 'react';
import './App.css';
import { StreamLinks } from './components/StreamLinks';
import cover from './images/pasta_russa_2021_400px.jpg';

function App() {
  return (
    <div className="pasta-russa">
      <div className="album-info">
        <div className="album-name">
          <h2 className="band-name">Pasta Russa</h2>
          <h2 className="album-title">2021</h2>
        </div>
        <img src={cover} className="album-cover" alt="album cover" />
        <StreamLinks />
      </div>
    </div>
  );
}

export default App;
