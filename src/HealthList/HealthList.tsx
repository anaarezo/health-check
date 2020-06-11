import React, { Component } from "react";

import HealthData from "../data/data.json"; 
import TesteComponent from "./HealthCard";

import "./HealthList";

const newHealthData = HealthData.map((HealthData) => <TesteComponent data={HealthData} />);

export default class HealthList extends Component {
  render() {
    return <div> {newHealthData} </div>;
  }
}