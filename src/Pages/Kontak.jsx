import React, { Component } from 'react';
import {Footer} from '../Components/organisms';
import {Kartu, KartuFooter} from '../Components/molecules';

export default class Kontak extends Component {

  hendelSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <>
        <h1 className="judul">Kontak</h1>
        <div className="konten">
          <form className="form-kontak" onSubmit={this.hendelSubmit}>
            <div className="input-kontak">
              <span>Email</span>
              <input type="text" />
            </div>
            <div className="input-kontak">
              <span>Judul</span>
              <input type="text" />
            </div>
            <div className="input-kontak">
              <span>Deskripsi</span>
              <textarea></textarea>
            </div>
            <input type="submit" value="Kirim Email" className="kirim" />
          </form>
        </div>
        <Footer>
          <KartuFooter/>
        </Footer>
      </>
    )
  }
}
