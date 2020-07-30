import React, { Component } from 'react';
import {Search} from '../Atoms';

export default class CariBlog extends Component {
  constructor(props){
    super(props);

    this.state = {
      ada: true
    };
    this.hendleClick = this.hendleClick.bind(this);
  }

  hendleClick(e) {
    // e.preventDefault();
    if(this.state.ada){
      return this.setState({
        ada: false
      });
    }
    return this.setState({
      ada: true
    });
  }

  componentDidMount(){
    console.log(this.props.children);
    console.log(this.props.ada);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <div onClick={this.hendleClick}>
          <Search/>
        </div>
      </div>
    )
  }
}
