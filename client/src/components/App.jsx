import React, { Component } from 'react';
import axios from 'axios';
import PhysicianList from './PhysicianList.jsx';
import AppointmentTable from './AppointmentTable.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: []
    }
  }

  componentDidMount() {
    axios.get('/physicians')
  }

  render() {
    return (
      <div>
        <section class='physicians-container'>
          Physicians list goes here
        </section>
        <sections class='appointments-container'>
          Appointments list goes here
        </sections>
      </div>
    );
  }
}
