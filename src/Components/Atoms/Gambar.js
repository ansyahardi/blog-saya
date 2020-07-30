import React from 'react'

export default function Gambar(props) {
  return (
    <img
      src={props.src}
      className={props.namaKelas}
      alt={props.alt}
    />
  )
}
