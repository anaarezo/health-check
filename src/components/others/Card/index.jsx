import React, { Component } from "react";
import { Card, CardColumns } from "./styles";
import data from "../../../data/data.json";

const GlicoData = data.map((data) => {
  return (
    <Card key={data.id}>
      <Card>{data.userID}</Card>
      <Card>{data.mealContext}</Card>
      <Card>{data.concentration}</Card>
      <Card>{data.concentrationUnit}</Card>
      <Card>{data.measuredAt} </Card>
      <Card>{data.mealContext}</Card>
      <Card>{data.measurementMethod}</Card>
      <Card>{data.notes} </Card>
      <Card>{data.createdAt}</Card>
      <Card>{data.updatedAt}</Card>
    </Card>
  );
});

class CardList extends Component {
  render() {
    return <CardColumns> {GlicoData} </CardColumns>;
  }
}

export default CardList;