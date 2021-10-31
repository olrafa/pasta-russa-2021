import React, { useState } from 'react';

export const ContactLink = () => {
  const [open, setOpen] = useState(false);

  const closedItem = <p>Contato</p>;
  const openItem = <p>pastarussa@tutanota.com</p>;

  return (
    <div className="contact-mail" onClick={() => setOpen((_open) => !_open)}>
      {open ? openItem : closedItem}
    </div>
  );
};
