import React from 'react';
import {Judul, Gambar, Link, Paragraf} from '../Atoms';

export default function Post(props) {
  return (
    <div className="post">
      <Gambar
        src={props.src}
        namaKelas="gambar-post"
        alt={props.alt}
      />
      <div>
        {props.children}
        <Link
          href={props.href}
          namaKelas="link-post"
          isi="Mulai Baca"
        />
      </div>
    </div>
  )
}
