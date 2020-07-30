import React from 'react';
import {Judul, Paragraf, Gambar} from '../Atoms';

export default function DeskripsiSaya(props) {
  return (
    <div className="deskripsi-saya">
      <Judul
        namaKelas="judul-deskripsi"
        isi={props.isi}
      />
      <div>
        <Paragraf
          namaKelas="paragraf-deskripsi"
          isi={props.children}
        />
        <Gambar
          src={props.src}
          namaKelas="gambar-deskripsi"
          alt={props.alt}
        />
      </div>
    </div>
  )
}
