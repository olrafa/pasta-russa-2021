import React from 'react';
import { services } from '../constants/streamServices';

export const StreamLinks = () => {
  return (
    <div className="album-links">
      {services
        .filter((service) => service.link)
        .map((service) => (
          <a href={service.link} target="_blank" rel="noreferrer noopener">
            <img
              src={service.icon}
              alt={service.name}
              key={service.id}
              className="stream-link"
            />
          </a>
        ))}
    </div>
  );
};
