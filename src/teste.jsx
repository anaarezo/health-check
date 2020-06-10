import React from "react";
// import "./index.css";

const Bla = ({ data}) => {
  return (
    <div key={data.id}>
        <div>
          <div>{data.userID}</div>
          <div>{data.mealContext}</div>
          <div>{data.concentration}</div>
          <div>{data.concentrationUnit}</div>
          <div>{data.measuredAt} </div>
          <div>{data.mealContext}</div>
          <div>{data.measurementMethod}</div>
          <div>{data.glucometer?.name} </div>
          <div>{data.glucometer?.manufacturer} </div>
          <div>{data.notes} </div>
          <div>{data.createdAt}</div>
          <div>{data.updatedAt}</div>
        </div>
      </div>
  )
}

export default Bla;