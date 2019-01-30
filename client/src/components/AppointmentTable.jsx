import React, { Component } from 'react'
import AppointmentRow from './AppointmentRow.jsx';

function AppointmentTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Time</th>
          <th>Kind</th>
        </tr>
      </thead>
      <tbody>
        {/* would first sort appointments by time/date */}
        {props.appointments.map((appointment, i) => {
          return (<AppointmentRow {...appointment} key={i} index={i} />);
        })}
      </tbody>
    </table>
  );
}

export default AppointmentTable;
