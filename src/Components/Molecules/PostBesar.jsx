import React from 'react'

export default function Post(props) {
  return (
    <div className="post besar">
      <img src={props.src} alt={props.judul} />
      <h3>{props.judul}</h3>
      <p>{props.isi}</p>
      <a href="#">Mulai Baca</a>
    </div>
  )
}
