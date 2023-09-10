// Train.js
import React from 'react';

const Train = ({ name, departureTime, destination }) => {
  return (
    <div className="train">
      <h2>{name}</h2>
      <p>Departure Time: {departureTime}</p>
      <p>Destination: {destination}</p>
    </div>
  );
};

export default Train;
