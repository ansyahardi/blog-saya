import React, { Component } from 'react';
import Footer from './Footer';

export default class BadanKonten extends Component {
  render() {
    return (
      <div className="badan-konten">
        <h1 className="judul">Home</h1>
        <div className="konten">
          <PostBlog
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            judul="Bussiness GrowUp"
            isi="Apa itu bussines GrowUp? yang merupakan hal terpenting pada suatu bisnis. Anda perlu meningkatkan bisnis Anda karna kalau tidak meningkatkan bisnis kita akan terus berada disitu-situ saja yang tidak akan menguntungkan kita jadi yuk tingkatkan bisnis kita dengan cara yang sangat mudah. Sebenanya apasih Growup itu? apakah memang penting untuk bisnis kita? siapa saja yang memang harus memakainya? apakah kita harus dari awal memakai metodenya? ya apa itu orang-orang yang memakainya pasti akan sukseskan?"
          />
          <PostBlog
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            judul="Bussiness GrowUp"
            isi="Apa itu bussines GrowUp? yang merupakan hal terpenting pada suatu bisnis. Anda perlu meningkatkan bisnis Anda karna kalau tidak meningkatkan bisnis kita akan terus berada disitu-situ saja yang tidak akan menguntungkan kita jadi yuk tingkatkan bisnis kita dengan cara yang sangat mudah. Sebenanya apasih Growup itu? apakah memang penting untuk bisnis kita? siapa saja yang memang harus memakainya? apakah kita harus dari awal memakai metodenya? ya apa itu orang-orang yang memakainya pasti akan sukseskan?"
          />
          <PostBlog
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            judul="Bussiness GrowUp"
            isi="Apa itu bussines GrowUp? yang merupakan hal terpenting pada suatu bisnis. Anda perlu meningkatkan bisnis Anda karna kalau tidak meningkatkan bisnis kita akan terus berada disitu-situ saja yang tidak akan menguntungkan kita jadi yuk tingkatkan bisnis kita dengan cara yang sangat mudah. Sebenanya apasih Growup itu? apakah memang penting untuk bisnis kita? siapa saja yang memang harus memakainya? apakah kita harus dari awal memakai metodenya? ya apa itu orang-orang yang memakainya pasti akan sukseskan?"
          />
          <PostBlog
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            judul="Bussiness GrowUp"
            isi="Apa itu bussines GrowUp? yang merupakan hal terpenting pada suatu bisnis. Anda perlu meningkatkan bisnis Anda karna kalau tidak meningkatkan bisnis kita akan terus berada disitu-situ saja yang tidak akan menguntungkan kita jadi yuk tingkatkan bisnis kita dengan cara yang sangat mudah. Sebenanya apasih Growup itu? apakah memang penting untuk bisnis kita? siapa saja yang memang harus memakainya? apakah kita harus dari awal memakai metodenya? ya apa itu orang-orang yang memakainya pasti akan sukseskan?"
          />
          <PostBlog
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            judul="Bussiness GrowUp"
            isi="Apa itu bussines GrowUp? yang merupakan hal terpenting pada suatu bisnis. Anda perlu meningkatkan bisnis Anda karna kalau tidak meningkatkan bisnis kita akan terus berada disitu-situ saja yang tidak akan menguntungkan kita jadi yuk tingkatkan bisnis kita dengan cara yang sangat mudah. Sebenanya apasih Growup itu? apakah memang penting untuk bisnis kita? siapa saja yang memang harus memakainya? apakah kita harus dari awal memakai metodenya? ya apa itu orang-orang yang memakainya pasti akan sukseskan?"
          />
        </div>
        <div className="konten-kanan">
          <div className="rekomendasi">
            <h4>Rekomendasi</h4>
            <PostKecil
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              judul="Kemajuan Teknologi Ada Pada Manusianya"
            />
            <PostKecil
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              judul="Kemajuan Teknologi Ada Pada Manusianya"
            />
            <PostKecil
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              judul="Kemajuan Teknologi Ada Pada Manusianya"
            />
          </div>
          <div className="tag-tag">
            <h4>Tag</h4>
            <div className="isi-tag">
              <p className="tag">Teknologi</p>
              <p className="tag">Seni</p>
              <p className="tag">Alam</p>
              <p className="tag">Persentasi</p>
              <p className="tag">Bisnis</p>
              <p className="tag">Peningkatan Diri</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

const PostBlog = (props) => {
  return(
    <div className="post">
      <img src={props.src} alt={props.judul} />
      <h3>{props.judul}</h3>
      <p>{props.isi}</p>
      <a href="#">Mulai Baca</a>
    </div>
  );
}

const PostKecil = props => {
  return(
    <div className="post-kecil">
      <img src={props.src} alt={props.judul} />
      <h5>{props.judul}</h5>
      <a href="#">Mulai Baca</a>
    </div>
  );
}