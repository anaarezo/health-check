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
  const [activeIndex, setActiveIndex] = useState(null);

  const Exams = () => {
    const listExams = data.map((item) => (
      <Fragment>

        <Button
          color="light"
          size="lg"
          block
          onClick={e => setActiveIndex(activeIndex === item.id ? null : item.id)}
          style={{ marginBottom: "1rem" }}
        >
          <Span>
            <I>{moment(new Date(item.measuredAt)).format("hh:mm")}</I>
          </Span>
          <Label>
            Medição automática:
            <Med>
              {item.concentration}
              <Conc>{item.concentrationUnit}</Conc>
            </Med>
          </Label>
        </Button>
        <Collapse isOpen={activeIndex === item.id}>
          <Card>
            <CardBody>
              <ListItem>item: {moment(new Date(item.measuredAt)).format("DD/MM/YYYY")}</ListItem>
              <ListItem>Horário: {moment(new Date(item.measuredAt)).format("hh:mm")}</ListItem>
              <ListItem>Método: {item.measurementMethod}</ListItem>
              <ListItem>Nota: {item.notes} </ListItem>
            </CardBody>
          </Card>
        </Collapse>

      </Fragment>
    ))

    return listExams;
  }
  // const toggle = () => (id) => {
  //   console.log('um id', id)
  //   if (id === item.id) {
  //     setIsOpen(!isOpen);
  //   }
  // }

  return (
    <Fragment>
      <Text>{dayNumber}</Text>
      <Exams />
      {/* <Wrap key={data.id}>
        <Text>{dayNumber}</Text>
        <WrapCard userID={data.userID}>
          <Button
            color="light"
            size="lg"
            block
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            <Span>
              <I>{moment(new Date(data.measuredAt)).format("hh:mm")}</I>
            </Span>
            <Label>
              Medição automática:
              <Med>
                {data.concentration}
                <Conc>{data.concentrationUnit}</Conc>
              </Med>
            </Label>
          </Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                <ListItem>Data: {moment(new Date(data.measuredAt)).format("DD/MM/YYYY")}</ListItem>
                <ListItem>Horário: {moment(new Date(data.measuredAt)).format("hh:mm")}</ListItem>
                <ListItem>Método: {data.measurementMethod}</ListItem>
                <ListItem>Nota: {data.notes} </ListItem>
              </CardBody>
            </Card>
          </Collapse>
        </WrapCard>
      </Wrap> */}
    </Fragment>
  );
};

const ContainerGlico = datesFromData.map(
  (item) => <GlicoData data={item.arr} dayNumber={item.date} key={Math.random()} />
);

class CardList extends Component {
  render() {
    return <Wrapper>{ContainerGlico}</Wrapper>;
  }
}

export default CardList;

