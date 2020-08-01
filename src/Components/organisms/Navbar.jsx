import React from 'react';
import {SearchOutlined} from '@ant-design/icons';

export default function Navbar() {

  const isiMenu = ['Home', 'Populer', 'Kontak', 'Tentang'];

  const menu = isiMenu.map(e => <li key={e}>{e}</li>)

  const hendleClick = e => {
    const humberger = e.target;
    const ul = humberger.nextSibling;
    const navbarAksi = ul.nextSibling;

    ul.classList.toggle("simpan");
    navbarAksi.classList.toggle("simpan");

    console.log(navbarAksi);
  }
  const hendleClick2 = e => {
    e.stopPropagation();
    const humberger = e.target.parentNode;
    const ul = humberger.nextSibling;
    const navbarAksi = ul.nextSibling;

    ul.classList.toggle("simpan");
    navbarAksi.classList.toggle("simpan");

    console.log(navbarAksi);
  }

  return (
    <div className="navbar">
      <h1>BlogSaya</h1>
      <div onClick={hendleClick} className="humberger">
        <div onClick={hendleClick2} id="asd"></div>
      </div>
      <ul className="simpan">
        {menu}
      </ul>
      <div className="aksi-navbar simpan">
        <SearchOutlined style={{fontSize: "1.3rem", color:"#363732"}} />
        <div className="input-berlangganan">
          <input type="email" placeholder="Email" />
          <button>Berlangganan</button>
        </div>
      </div>
    </div>
  )
}
