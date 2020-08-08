/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {Footer, KontenKanan} from '../organisms';
import {Post, Kartu, KartuFooter} from '../molecules';
// import data from '../../data/dataDummy.json';
import {MyContext} from '../Provier';


export default function BadanKonten(props) {
  
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
      <h1 className="judul">{props.judul}</h1>
      <div className="konten">
        <div>
          {post}
        </div>
        <KontenKanan/>
      </div>
      <Footer>
        <Kartu/>
        <KartuFooter/>
      </Footer>
    </>
  )
}

BadanKonten.propTypes = {
  judul: PropTypes.string
}