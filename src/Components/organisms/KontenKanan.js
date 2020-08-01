import React, { Component } from 'react';
import {PostKecil} from '../molecules';
import data from '../../data/dataDummy.json';

export default class KontenKanan extends Component {
  render() {

    const isiData = data.post;
    const tags = ['Teknologi', 'Seni', 'Alam', 'Persentasi', 'Bisnis', 'Penigkatan Diri'];
    const postKecil = isiData.map(e => <PostKecil key={e.id} src={e.foto} judul={e.judul} />);
    const tag = tags.map(e => <p key={e} className="tag">{e}</p>);

    return (
      <div className="konten-kanan">
        <div className="rekomendasi">
          <h4>Rekomendasi</h4>
          {postKecil}
        </div>
        <div className="tag-tag">
          <h4>Tag</h4>
          <div className="isi-tag">
            {tag}
          </div>
        </div>
      </div>
    )
  }
}
