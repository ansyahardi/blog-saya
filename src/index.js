import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Home from './Components/home/';
import CariBlog from './Components/Molecules/CariBlog';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <CariBlog ada={['siapa', 'yang bisa']}>
      <p>apa yang mu rasa?<i>asd</i></p>
      <div>asdasdads</div>
    </CariBlog> */}
  </React.StrictMode>,
  document.getElementById('root')
);