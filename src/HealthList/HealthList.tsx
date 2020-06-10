import React, { Component } from "react";


// import "./index.css";
import HealthData from "../data/data.json"; 

import "./HealthList";

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
});

export default class HealthList extends Component {
  render() {
    return <div> {newHealthData} </div>;
  }
}