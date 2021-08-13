import React from "react";
import { Row } from "../../components";
import styled from "styled-components";

const SectionContainer = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 125px;
  justify-items: center;
  margin-top: 140px;
  margin-bottom: 140px;
`;

export default function InfoSectionMainBlock() {
  return (
    <SectionContainer>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla nisi magni aliquam, numquam libero ducimus aliquid in sint velit, recusandae provident distinctio laboriosam doloribus veritatis odio vitae quos iusto?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga esse molestias impedit reprehenderit fugit necessitatibus veniam, quibusdam sapiente quis inventore provident dicta doloremque, in vitae saepe dolor, quas magnam.</div>
          </SectionContainer>
  );
}
