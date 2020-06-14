import React, { Component, Fragment } from "react";
import moment from 'moment';
import _ from 'lodash'
import data from "../../../data/data.json";
import { 
  Wrapper,
  Toggle,
  Button,
  Collapse,
  Card,
  CardBody,
  ListItem,
} from "./styles";

const datesFromData = _.chain(data)
                      .groupBy(item => moment(item.measuredAt).date())
                      .map((arr, date) => ({ arr, date }))
                      .value()

const GlicoData = ({ data, dayNumber }) => {
  console.log('glico', data, dayNumber);
// const datesFromData = _.chain(data);
  return (
    <Fragment key={data.id}>
      <Toggle userID={data[0].userID}>
        <Button></Button>
        <Collapse>
          <Card>
            <CardBody>
              <ListItem>{data[0].mealContext}</ListItem>
              <ListItem>{data[0].concentration}</ListItem>
              <ListItem>{data[0].concentrationUnit}</ListItem>
              <ListItem>{data[0].measuredAt} </ListItem>
              <ListItem>{data[0].mealContext}</ListItem>
              <ListItem>{data[0].measurementMethod}</ListItem>
              <ListItem>{data[0].notes} </ListItem>
              <ListItem>{data[0].createdAt}</ListItem>
              <ListItem>{data[0].updatedAt}</ListItem>
            </CardBody>
          </Card>
        </Collapse>
      </Toggle>
    </Fragment>
  );
};

const ContainerGlico = datesFromData.map(item => console.log(item) || <GlicoData data={item.arr} dayNumber={item.date} key={Math.random()} />);

class CardList extends Component {
  render() {
    return <Wrapper>{ContainerGlico}</Wrapper>;
  }
}

export default CardList;