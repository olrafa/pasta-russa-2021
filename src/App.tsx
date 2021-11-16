import React from 'react';
import './App.css';
import { About } from './components/About';
import { StreamLinks } from './components/StreamLinks';
import { songWhip } from './constants/other';
import cover from './images/pasta_russa_2021_400px.jpg';

function App() {
  return (
    <div className="pasta-russa">
      <div className="album-name">
        <h2 className="band-name">Pasta Russa</h2>
        <a href={songWhip} target="_blank" rel="noreferrer noopener">
          <h2 className="album-title">2021</h2>
        </a>
      </div>
      <div className="album-info">
        <img src={cover} className="album-cover" alt="album cover" />
        <StreamLinks />
      </div>
      <About />
    </div>
  );
}

export default App;
