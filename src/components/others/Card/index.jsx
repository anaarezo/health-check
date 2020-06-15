import React, { Component, Fragment, useState } from "react";
import { Collapse, Button } from "reactstrap";

import moment from "moment";
import _ from "lodash";
import data from "../../../data/data.json";
import {
  Wrapper,
  ListItem,
  Span,
  I,
  Card,
  CardBody,
  Label,
  Med,
  Conc,
  Text,
  Wrap,
  WrapCard,
} from "./styles";

const datesFromData = _.chain(data)
  .groupBy((item) => moment(item.measuredAt).date())
  .map((arr, date) => ({ arr, date }))
  .value();

const GlicoData = ({ data, dayNumber }, props) => {
  console.log("glico", data);
  console.log("daynumber:", dayNumber);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Wrap key={data.id}>
        <Text>{dayNumber}</Text>
        <WrapCard userID={data[0].userID}>
          <Button
            color="light"
            size="lg"
            block
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            <Span>
              <I>{moment(new Date(data[0].measuredAt)).format("hh:mm")}</I>
            </Span>
            <Label>
              Medição automática:
              <Med>
                {data[0].concentration}
                <Conc>{data[0].concentrationUnit}</Conc>
              </Med>
            </Label>
          </Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                <ListItem>Data: {moment(new Date(data[0].measuredAt)).format("DD/MM/YYYY")}</ListItem>
                <ListItem>Horário: {moment(new Date(data[0].measuredAt)).format("hh:mm")}</ListItem>
                <ListItem>Método: {data[0].measurementMethod}</ListItem>
                <ListItem>Nota: {data[0].notes} </ListItem>
              </CardBody>
            </Card>
          </Collapse>
        </WrapCard>
      </Wrap>
    </Fragment>
  );
};

const ContainerGlico = datesFromData.map(
  (item) =>
    console.log(item) || (
      <GlicoData data={item.arr} dayNumber={item.date} key={Math.random()} />
    )
);

class CardList extends Component {
  render() {
    return <Wrapper>{ContainerGlico}</Wrapper>;
  }
}

export default CardList;
