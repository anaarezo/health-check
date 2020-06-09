import React, { Component } from 'react';
import './index.css';
import HealthData from './data/data.json';

import './HealthList.css';

// "id": "5ebebdd9918ad0a11ff5df0a",
//       "userID": "4637b06a-5c9e-4ddf-920d-1b8e2aee5d34",
//       "concentration": 102,
//       "concentrationUnit": "mg/dL",
//       "measuredAt": "2020-05-15T16:05:00Z",
//       "mealContext": "After",
//       "measurementMethod": "BGM",
//       "glucometer": {
//           "name": "Accu check guide",
//           "manufacturer": "Roche"
//       },
//       "notes": "Medição 39 minutos depois do almoço",
//       "createdAt": "2020-05-15T16:05:45.58Z",
//       "updatedAt": "0001-01-01T00:00:00Z"
const newHealthData = HealthData.map((HealthData) => {
  return (
    <div key={HealthData.id}>
      <h2>cliente</h2>
      <div>
        <div>{HealthData.userID}</div>
        <div>{HealthData.mealContext}</div>
        <div>{HealthData.concentration}</div>
        <div>{HealthData.concentrationUnit}</div>
        <div>{HealthData.measuredAt} </div>
        <div>{HealthData.mealContext}</div>
        <div>{HealthData.measurementMethod}</div>
        <div>{HealthData.glucometer?.name} </div>
        <div>{HealthData.glucometer?.manufacturer} </div>
        <div>{HealthData.notes} </div>
        <div>{HealthData.createdAt}</div>
        <div>{HealthData.updatedAt}</div>
      </div>
    </div>

  );
}
);

export default class HealthList extends Component {
  render() {
    return (
      <div>  {newHealthData}  </div>

    );
  }
}