import React from "react";
import { Row } from "../../components";
import styled from "styled-components";

const ButtonsBlockWrapper = styled(Row)`
  display: grid;
  place-items: center;
  width: 320px;
  flex: 1;
`;

const ButtonsBlockContainer = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
  margin-top: 100px;
`;

const Button = styled.button`
  height: 47px;
  text-transform: uppercase;
  font-size: 0.8rem;
  border: 1px solid white;
  background: transparent;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

export default function ButtonsBlock() {
  return (
    <ButtonsBlockWrapper>
      <ButtonsBlockContainer>
        <Button type="button">винная карта</Button>
        <Button type="button">дегустация</Button>
      </ButtonsBlockContainer>
    </ButtonsBlockWrapper>
  );
}
