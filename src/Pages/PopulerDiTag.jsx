/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import {Footer} from '../Components/organisms';
import {KartuFooter, Kartu, PostBesar, Post} from '../Components/molecules';
// import data from '../data/dataDummy.json';
import {MyContext} from '../Components/Provier';

export default function PopulerDiTag(props) {
  const [Consume] = useContext(MyContext);
  const isiData = Consume.post;
  const ketik = Consume.ketik.toLowerCase();
  const post = isiData.map(e => {
    const judul = e.judul.toLowerCase();
    if(judul.indexOf(ketik) === -1){
      return;
    }
    return <Post key={e.id} src={e.foto} judul={e.judul} isi={e.isi} />;
  });

  return (
    <>
      <h1 className="judul">Populer</h1>
      {ketik.length > 0  ? '' : <PostBesar src={isiData[0].foto} judul={isiData[0].judul} isi={isiData[0].isi} />}
      <div className="konten">
        <div>
          {post}
        </div>
        <p>Populer di {props.match.params.ardi}</p>
      </div>
      <Footer>
        <Kartu/>
        <KartuFooter/>
      </Footer>
    </>
  )
}
