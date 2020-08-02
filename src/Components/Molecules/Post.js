import React from 'react';
import {Link} from 'react-router-dom';

export default function Post(props) {
  return (
    <div className="post">
      <img src={props.src} alt={props.judul} />
      <Link to="/post" className="judul-post">{props.judul}</Link>
      <p>{props.isi}</p>
      <Link to="/post">Mulai Baca</Link>
    </div>
  )
}
