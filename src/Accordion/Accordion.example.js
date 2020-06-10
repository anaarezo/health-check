import React from "react";
import styled from "styled-components";

import Accordion from "./Accordion";

const AccordionExample = (/*{ children:any }*/) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <Accordion>
          <Accordion.Item title="Item 1">
            <ul>
              <li>hello</li>
              <li>ana</li>
              <li>joana</li>
              <li>dani</li>
              <li>paula</li>
            </ul>
          </Accordion.Item>
          <Accordion.Item title="Item 2">
            <ul>
              <li>hello</li>
              <li>ana</li>
              <li>joana</li>
              <li>dani</li>
              <li>paula</li>
            </ul>
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

export default AccordionExample;
