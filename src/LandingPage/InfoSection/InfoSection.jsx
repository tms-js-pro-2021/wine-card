import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import Divider from "../../components/Divider";
import InfoSectionMainBlock from "./InfoSectionMainBlock";


const ContainerStyled = styled(Container)`
  background: #e6e3c4;
  background-position: center;
  height: auto;
  padding: 80px 24px 80px 24px;
  `;

export default function InfoSection() {
  return (
    <ContainerStyled>
      <Divider />
      <InfoSectionMainBlock />
      <Divider />
    </ContainerStyled>
  );
}
