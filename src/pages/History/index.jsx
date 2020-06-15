import React, { Fragment } from "react";
import { Navbar } from "./styles";
import CardList from "../../components/others/Card";

export const History = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar>Olá, José!</Navbar>
      </Navbar>
      <CardList />
    </Fragment>
  );
};

export default History;