import React from 'react';
import { services } from '../constants/streamServices';

export const StreamLinks = () => {
  return (
    <div className="album-links">
      {services.filter(service => service.link).map((service) => (
        <img src={service.icon} alt={service.name} className="stream-link" />
      ))}
    </div>
  );
};
