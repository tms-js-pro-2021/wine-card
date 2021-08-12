import React from "react";
import styled from "styled-components";
import { Container } from "../../components";

const ContainerStyled = styled(Container)`
  background: #282828;
`;

const BorderBox = styled.div`
 height: 538px;
 width: 100%; 
  border:1px solid white;
  margin-bottom :100px ;
  margin-top: 129px;
  
`
 
export default function RegisterForTastingSection() {
  return (
    <ContainerStyled>
      <BorderBox>
        
      </BorderBox>
    </ContainerStyled>
  );
}
