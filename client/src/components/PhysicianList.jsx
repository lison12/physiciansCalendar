import React, { Component } from 'react'

export default class PhysicianList extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <ul>
        {this.props.physicians.map((physician, i) => (<li>{`${physician.last}, ${physician.first}`}</li>))}
      </ul>
    );
  }
}