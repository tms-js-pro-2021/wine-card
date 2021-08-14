import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import Divider from "../../components/Divider";
import InfoSectionMainBlock from "./InfoSectionMainBlock";


const ContainerStyled = styled(Container)`
  background: #e6e3c4;
  padding: 80px 0 80px 0;
`;

const Wrapper = styled(Container)`
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
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
