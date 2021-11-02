import React, { useState } from 'react';
import { about, socials } from '../constants/info';

type langs = 'PT' | 'EN';

export const About = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<langs>('PT');

  const langBtn = (lan: langs) => (
    <span
      className={`lang-selector ${language === lan ? 'on' : ''}`}
      onClick={() => setLanguage(lan)}
    >
      {lan}
    </span>
  );

  return (
    <div className="about-page">
      <div
        className="about-page closed"
        onClick={() => setOpen((_open) => !_open)}
      >
        Info
      </div>
      {open ? (
        <div className="about-page open">
          <div className="about-lang">
            {langBtn('PT')}|{langBtn('EN')}
          </div>
          <p className="about-text">{about[language]}</p>
          <p className="about-text">
            {socials[language]}{' '}
            <span className="about-mail">
              <a href="mailto:pastarussa@tutanota.com">
                pastarussa@tutanota.com
              </a>.
            </span>
          </p>
          <p className="about-city">São Paulo-BR / Rotterdam-NL</p>
          <p className="about-artwork">
            Artwork:{' '}
            <a
              href="https://instagram.com/anonniks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @annoniks
            </a>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
