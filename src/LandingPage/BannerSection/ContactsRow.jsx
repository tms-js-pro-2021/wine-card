import React from "react";
import { Row } from "../../components";
import styled from "styled-components";

const SpacedRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-top: 10px;
`;

export default function ContactsRow() {
  return (
    <SpacedRow>
      <span>Новокузнечный переулок 4/1</span>
      <span>8 (812) 123-45-67</span>
    </SpacedRow>
  );
}
