import React, { Component } from 'react';
import {Gambar, Judul, Link} from '../Atoms';

export default class PostRekomendasi extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="post-rekomendasi">
        <Gambar
          src={this.props.src}
          alt={this.props.alt}
          namaKelas="gambar-post-rekomendasi"
        />
        <div>
          <Judul
            namaKelas="judul-post-rekomendasi"
            isi={this.props.isi}
          />
          <Link
            href={this.props.href}
            namaKelas="link-post-rekomendasi"
            isi="Mulai Baca"
          />
        </div>
      </div>
    )
  }
}
