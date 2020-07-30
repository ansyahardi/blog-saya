import React from 'react';
import {Paragraf} from '../Atoms';

export default function Menu() {
  return (
    <div className="menu">
      <Paragraf
        isi="Home"
      />
      <Paragraf
        isi="Populer"
      />
      <Paragraf
        isi="Kontak"
      />
      <Paragraf
        isi="Tentang"
      />
    </div>
  )
}
