import React from "react";
import { Title } from '../../../theme';


const Bla = ({ data }) => {
  return (
    <ul key={data.id}>
      <li><Title>{data.userID}</Title></li>
      <li>{data.mealContext}</li>
      <li>{data.concentration}</li>
      <li>{data.concentrationUnit}</li>
      <li>{data.measuredAt} </li>
      <li>{data.mealContext}</li>
      <li>{data.measurementMethod}</li>
      <li>{data.glucometer?.name} </li>
      <li>{data.glucometer?.manufacturer} </li>
      <li>{data.notes} </li>
      <li>{data.createdAt}</li>
      <li>{data.updatedAt}</li>
    </ul>
  )
}

export default Bla;