import React from 'react';
import './App.css';
import { ContactLink } from './components/ContactLink';
import { StreamLinks } from './components/StreamLinks';
import cover from './images/pasta_russa_2021_400px.jpg';

function App() {
  return (
    <div className="pasta-russa">
      <div className="album-name">
        <h2 className="band-name">Pasta Russa</h2>
        <h2 className="album-title">2021</h2>
      </div>
      <div className="album-info">
        <img src={cover} className="album-cover" alt="album cover" />
        <StreamLinks />
      </div>
      <ContactLink />
    </div>
  );
}

export default App;
