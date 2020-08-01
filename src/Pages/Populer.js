import React, { Component } from 'react';
import {Footer} from '../Components/organisms';
import {KartuFooter, Kartu, PostBesar, Post} from '../Components/molecules';
import data from '../data/dataDummy.json';

export default class Populer extends Component {
  render() {

    const isiData = data.post;
    const post = isiData.map(e => <Post key={e.id} src={e.foto} judul={e.judul} isi={e.isi} />);

    return (
      <>
        <h1 className="judul">Populer</h1>
        <PostBesar src={isiData[0].foto} judul={isiData[0].judul} isi={isiData[0].isi} />
        <div className="konten">
          <div>
            {post}
          </div>
          <p>Populer di BlogSaya</p>
        </div>
        <Footer>
          <Kartu/>
          <KartuFooter/>
        </Footer>
      </>
    )
  }
}
