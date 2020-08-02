/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';

export default function PostKecil(props) {
  return (
    <div className="post-kecil">
      <img src={props.src} alt={props.judul} />
      <Link to="/post" className="judul-post">{props.judul}</Link>
      <Link to="/post">Mulai Baca</Link>
    </div>
  )
}
