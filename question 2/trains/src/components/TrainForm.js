// TrainForm.js
import React, { useState } from 'react';

const TrainForm = ({ addTrain }) => {
  const [name, setName] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrain({ name, departureTime, destination });
    setName('');
    setDepartureTime('');
    setDestination('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Departure Time:
        <input type="text" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
      </label>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </label>
      <button type="submit">Add Train</button>
    </form>
  );
};

export default TrainForm;
