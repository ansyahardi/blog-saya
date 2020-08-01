import React from 'react'

export default function PostKecil(props) {
  return (
    <div className="post-kecil">
      <img src={props.src} alt={props.judul} />
      <h5>{props.judul}</h5>
      <a href="#">Mulai Baca</a>
    </div>
  )
}
