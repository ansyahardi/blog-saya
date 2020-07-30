import React from 'react';
import {Label, Input} from '../Atoms';

export default function InputKontak(props) {
  return (
    <div>
      <Label
        namaKelas="label-input"
        isi={props.isi}
      />
      <Input
        type="text"
        namaKelas={props.namaKelas}
      />
    </div>
  )
}
// nanti form input ini dipanggil di Organisms Kontak bisa di panggil 3x