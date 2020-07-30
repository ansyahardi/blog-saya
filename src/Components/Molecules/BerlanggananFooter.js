import React, { Component } from 'react';
import {Input, Button, Label} from '../Atoms';

export default class BerlanggananFooter extends Component {
  render() {
    return (
      <div className="berlangganan-footer">
        <Input
          type="text"
          namaKelas="input-footer"
        />
        <Label
          namaKelas="label-footer"
          isi="Email"
        />
        <Button
          namaKelas="button-footer"
          isi="Berlangganan"
        />
      </div>
    )
  }
}
