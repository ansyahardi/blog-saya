import React, { Component } from 'react';
import { Input, Label, Button } from '../Atoms';

export default class BerlanggananNavbar extends Component {
  render() {
    return (
      <div>
        <Input
          tipe="text"
          namaKelas="input-navbar"
        />
        <Label
          isi="Email"
        />
        <Button
          namaKelas="tombol-navbar"
          isi="Berlangganan"
        />
      </div>
    )
  }
}
