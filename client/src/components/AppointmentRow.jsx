import React from 'react';

function AppointmentRow(props) {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{`${props.patient.first} ${props.patient.last}`}</td>
      <td>{props.time}</td>
      <td>{props.kind}</td>
    </tr>
  );
}

export default AppointmentRow;