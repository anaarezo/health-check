import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 60px;
  padding: 16px;
`;

export const Span = styled.div`
  padding: 18px 18px 18px 15px;
  border-top-left-radius: 28px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 94px;
  border-bottom-left-radius: 28px;
  background-color: #404bfb;
  margin: -8px -15px;
  width: 36.14%;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  line-height: 1.2;
  counter-reset: my-sec-counter;
  &:before {
    counter-increment: my-sec-counter;
    content: "" counter(my-sec-counter) "ª ";
  }
`;

export const I = styled.div`
  color: #25c9b6;
  font-size: 12px;
`;

export const Collapse = styled.div``;

export const Card = styled.div`
  margin: 0 16px 16px;
  background: #fafafa;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const ListItem = styled.div`
  font-size: 14px;
`;

export const Text = styled.div`
  color: #404bfb;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 30px;
  font-weight: bold;
`;

export const Label = styled.div`
  flex-direction: column;
  color: #404bfb;
  font-size: 12px;
  font-weight: bold;
  width: 70%;
  text-align: right;
`;

export const Med = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Conc = styled.div`
  font-size: 19px;
  text-indent: 5px;
  position: relative;
  top: 13px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

`;

export const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 75%;
`;
