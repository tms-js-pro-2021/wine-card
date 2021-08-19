import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import InformationBox from "./InformationBox";

export default function DescriptionSection() {
  const ContainerStyled = styled(Container)`
    background: #282828;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 856px;
    display: flex;
    justify-content: center;
    padding-top: 100px;
  `;

  return (
    <ContainerStyled>
      <InformationBox />
    </ContainerStyled>
  );
}
