const express = require('express');
const app = express();
const morgan = require('morgan');
const { physiciansData, appointmentsData } = require('../exampleData.js');

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/physicians', (req, res) => {
  res.send(physiciansData);
});

app.get('/physicians/appointments', (req, res) => {
  const { physicianId } = req.query;
  // would use database query filter
  const appointments = appointmentsData.filter(appointment => {
    return appointment.physicianId === parseInt(physicianId);
  });
  res.send(appointments);
})

app.listen(3000, () => {
  console.log('Listening on 3000!');
});
