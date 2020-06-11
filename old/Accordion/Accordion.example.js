import React from "react";
import styled from "styled-components";

import Accordion from "./Accordion";

const AccordionExample = ({ children }) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <Accordion>
          <Accordion.Item title="What do cats look like?">
            <p>fasdfasdf</p>
          </Accordion.Item>
          <Accordion.Item title="Foo">
          <p>fasdfasdf</p>
          </Accordion.Item>
        </Accordion>
      </Wrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f3fc;
  overflow: scroll;
`;

const Wrapper = styled.div`
  width: 500px;
`;

const CatImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default AccordionExample;
