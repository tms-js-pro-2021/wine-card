import React from "react";
import { Row } from "../../components";
import styled from "styled-components";
import InfoSectionTextBlock from "./InfoSectionTextBlock";
import InfoSectionPhotoBlock from "./InfoSectionPhotoBlock";

const SectionContainer = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  justify-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export default function InfoSectionMainBlock() {
  return (
    <SectionContainer>
      <InfoSectionTextBlock />
      <InfoSectionPhotoBlock />
          </SectionContainer>
  );
}
