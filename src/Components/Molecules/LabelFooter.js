import React, { Component } from 'react';
import {Judul} from '../Atoms';

export default class LabelFooter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="label-footer">
        <Judul
          namaKelas="judul-footer"
          isi={this.props.isi}
        />
        {this.props.children}
      </div>
    )
  }
}
