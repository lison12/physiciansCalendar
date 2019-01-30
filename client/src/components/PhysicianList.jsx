import React, { Component } from 'react'

function PhysicianList(props) {
  return (
    <div>
      <h3>PHYSICIANS</h3>
      <ul id='physicians'>
        {props.physicians.map((physician, i) => (
          <li
            className='physician'
            key={i} 
            data-id={physician.id}
            data-index={i}
            onClick={props.changePhysician}
          >
            {`${physician.last}, ${physician.first}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhysicianList;