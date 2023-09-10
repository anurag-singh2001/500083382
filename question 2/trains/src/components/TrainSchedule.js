// TrainSchedule.js
import React, { useState } from 'react';
import Train from './Train';
import TrainForm from './TrainForm';

const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);

  const addTrain = (train) => {
    setTrains([...trains, train]);
  };

  return (
    <div className="train-schedule">
      <h1>Train Schedule</h1>
      <TrainForm addTrain={addTrain} />
      <div className="train-list">
        {trains.map((train, index) => (
          <Train key={index} {...train} />
        ))}
      </div>
    </div>
  );
};

export default TrainSchedule;
