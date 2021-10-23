import React from 'react';
import cover from './images/pasta_russa_2021_400px.jpg';
import Spotify from './images/streamings/spotify.svg';
import './App.css';

function App() {
  return (
    <div className="pasta-russa">
      <img src={cover} className="album-cover" alt="album cover" />
      <div className="album-info">
        <div className="album-name">
          <h2>Pasta Russa</h2>
          <p>2021</p>
        </div>
        <div className="album-links">
          <img src={Spotify} alt="Spotify" className="stream-link" />
        </div>
      </div>
    </div>
  );
}

export default App;
