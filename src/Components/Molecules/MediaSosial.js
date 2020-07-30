import React, { Component } from 'react';
import {Paragraf} from '../Atoms';
import {FacebookFilled, YoutubeFilled, LinkedinFilled, DribbbleSquareFilled} from '@ant-design/icons';

export default class MediaSosial extends Component {
  render() {
    return (
      <div className="media-sosial">
        <Paragraf
          namaKelas="teks-media-sosial"
          isi="yuk terus ikuti kami dengan mengikuti media sosial kami terus agar kami tidak ketinggalan info terbaru."
        />
        <FacebookFilled className="sosial-media" />
        <YoutubeFilled className="sosial-media" />
        <LinkedinFilled className="sosial-media" />
        <DribbbleSquareFilled className="sosial-media" />
      </div>
    )
  }
}
