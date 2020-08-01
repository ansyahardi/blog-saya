import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <div className="badan-footer">
        {this.props.children}
      </div>
    )
  }
}
