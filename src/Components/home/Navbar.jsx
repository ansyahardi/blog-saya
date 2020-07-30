import React from 'react';
import {SearchOutlined} from '@ant-design/icons';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>BlogSaya</h1>
      <ul>
        <li>Home</li>
        <li>Populer</li>
        <li>Kontak</li>
        <li>Tentang</li>
      </ul>
      <div className="aksi-navbar">
        <SearchOutlined style={{fontSize: "1.3rem", color:"#363732"}} />
        <div className="input-berlangganan">
          <input type="email" placeholder="Email" />
          <button>Berlangganan</button>
        </div>
      </div>
    </div>
  )
}
