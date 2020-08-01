import React, { Component} from 'react';
import {Footer, KontenKanan} from '../organisms';
import {Post, Kartu, KartuFooter} from '../molecules';
import data from '../../data/dataDummy.json';

export default class BadanKonten extends Component {

  render() {

    const isiData = data.post;
    const post = isiData.map(e => <Post key={e.id} src={e.foto} judul={e.judul} isi={e.isi} />);
    

    return (
      <div className="badan-konten">
        <h1 className="judul">Home</h1>
        <div className="konten">
          {post}
        </div>
        <KontenKanan/>
        <Footer>
          <Kartu/>
          <KartuFooter/>
        </Footer>
      </div>
    )
  }
}