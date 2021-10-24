import React from 'react';
import { services } from '../constants/streamServices';

export const StreamLinks = () => {
  const openLink = (link: string) => window.open(link);

  return (
    <div className="album-links">
      {services
        .filter((service) => service.link)
        .map((service) => (
          <img
            src={service.icon}
            alt={service.name}
            key={service.id}
            className="stream-link"
            onClick={() => openLink(service.link as string)}
          />
        ))}
    </div>
  );
};
