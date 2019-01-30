import React, { Component } from 'react';
import axios from 'axios';
import PhysicianList from './PhysicianList.jsx';
import AppointmentTable from './AppointmentTable.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: [],
      selectedPhysician: {}
    }

    this.changePhysicianCalendar = this.changePhysicianCalendar.bind(this);
  }

  componentDidMount() {
    this.getAllPhysicians();
  }

  getAppointmentsForPhysician(physicianId) {
    const params = { physicianId }
    axios.get('/physicians/appointments', { params })
      .then(({ data }) => {
        this.setState({
          appointments: data
        })
      });
  }

  getAllPhysicians() {
    axios.get('/physicians')
      .then(({ data }) => {
        this.setState({ 
          physicians: data,
          selectedPhysician: data[0]
        }, () => {
          const { id } = this.state.selectedPhysician;
          this.getAppointmentsForPhysician(id);
        })
      })
  }

  changePhysicianCalendar(e) {
    const { id, index } = e.target.dataset;
    this.setState({
      selectedPhysician: this.state.physicians[index]
    }, () => {
      this.getAppointmentsForPhysician(id);
    });
  }

  render() {
    return (
      <div className='container' >
        <section className='physicians-container' >
          <PhysicianList 
            physicians={this.state.physicians}
            changePhysician={this.changePhysicianCalendar}
          />
        </section>
        <section className='appointments-container' >
          <h1>{`Dr. ${this.state.selectedPhysician.first} ${this.state.selectedPhysician.last}`}</h1>
          <h4>{this.state.selectedPhysician.email}</h4>
          <AppointmentTable appointments={this.state.appointments} />
        </section>
      </div>
    );
  }
}
