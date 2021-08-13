import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import Divider from "../../components/Divider";
import InfoSectionMainBlock from "./InfoSectionMainBlock";

const ContainerStyled = styled(Container)`
  background: #e6e3c4;
  padding-top: 80px;
`;

const Wrapper = styled(Container)`
  padding: 80px 0;
`;

export default function InfoSection() {
  return (
    <ContainerStyled>
      <Wrapper>
        <Divider />
        <InfoSectionMainBlock />
        <Divider />
      </Wrapper>
    </ContainerStyled>
  );
}
