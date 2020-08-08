import React, {useState, useContext} from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {MyContext} from '../Provier';

export default function Pencarian(props) {

  const [state, setState] = useState('');
  const [consume, setConsume] = useContext(MyContext);

  const hendelClick = e => {
    const inputBerlangganan = document.querySelector('.input-berlangganan');
    const input = document.querySelector('.pencarian input');

    inputBerlangganan.classList.toggle('none');
    input.classList.toggle('none');
  }

  const hendelChange = e => {
    setState(e.target.value);
    setConsume({...consume, ketik: e.target.value});
  }

  return (
    <div className="pencarian">
      <SearchOutlined onClick={hendelClick} style={{fontSize: "1.3rem", color:"#363732"}} />
      <input type="text" name="pencarian" className="none" value={state} onChange={hendelChange} />
    </div>
  )
}
