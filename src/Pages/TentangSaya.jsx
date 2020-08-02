import React, { Component } from 'react';
import {Footer} from '../Components/organisms';
import {Kartu, KartuFooter} from '../Components/molecules';

export default class TentangSaya extends Component {
  render() {
    return (
      <>
        <h1 className="judul">Tentang Saya</h1>
        <div className="konten">
          <div className="kotak">
            <h2>Siapa Saya</h2>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="gambar" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est fermentum ut aenean adipiscing in nibh in. Hendrerit nunc sem egestas risus viverra commodo sit. Condimentum scelerisque sit imperdiet a orci. Metus, tristique adipiscing interdum fusce condimentum augue quisque bibendum morbi. Malesuada ut sapien amet non imperdiet a. Justo, lectus consectetur volutpat egestas non adipiscing in eleifend. Turpis enim eget sit ac viverra pellentesque vulputate elementum. A placerat sit sem fringilla a. Porta in adipiscing at pulvinar in in.</p>
          </div>
          <div className="kotak">
            <h2>Siapa Saya</h2>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="gambar" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est fermentum ut aenean adipiscing in nibh in. Hendrerit nunc sem egestas risus viverra commodo sit. Condimentum scelerisque sit imperdiet a orci. Metus, tristique adipiscing interdum fusce condimentum augue quisque bibendum morbi. Malesuada ut sapien amet non imperdiet a. Justo, lectus consectetur volutpat egestas non adipiscing in eleifend. Turpis enim eget sit ac viverra pellentesque vulputate elementum. A placerat sit sem fringilla a. Porta in adipiscing at pulvinar in in.</p>
          </div>
          <div className="kotak">
            <h2>Siapa Saya</h2>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="gambar" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est fermentum ut aenean adipiscing in nibh in. Hendrerit nunc sem egestas risus viverra commodo sit. Condimentum scelerisque sit imperdiet a orci. Metus, tristique adipiscing interdum fusce condimentum augue quisque bibendum morbi. Malesuada ut sapien amet non imperdiet a. Justo, lectus consectetur volutpat egestas non adipiscing in eleifend. Turpis enim eget sit ac viverra pellentesque vulputate elementum. A placerat sit sem fringilla a. Porta in adipiscing at pulvinar in in.</p>
          </div>
          <div className="kotak">
            <h2>Siapa Saya</h2>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="gambar" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est fermentum ut aenean adipiscing in nibh in. Hendrerit nunc sem egestas risus viverra commodo sit. Condimentum scelerisque sit imperdiet a orci. Metus, tristique adipiscing interdum fusce condimentum augue quisque bibendum morbi. Malesuada ut sapien amet non imperdiet a. Justo, lectus consectetur volutpat egestas non adipiscing in eleifend. Turpis enim eget sit ac viverra pellentesque vulputate elementum. A placerat sit sem fringilla a. Porta in adipiscing at pulvinar in in.</p>
          </div>
        </div>
        <Footer>
          <Kartu/>
          <KartuFooter/>
        </Footer>
      </>
    )
  }
}
