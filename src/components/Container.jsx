import React from "react";
import styled from "styled-components";
import Row from "./Row";

const Wrapper = styled(Row)`
  justify-content: center;
`;

const InnerContainer = styled(Row)`
  max-width: 1110px;
  padding: 0 24px 0 24px;
  align-items: center;
  flex-direction: column;
`;

export default function Container({ children, ...otherProps }) {
  return (
    <Wrapper {...otherProps}>
      <InnerContainer>{children}</InnerContainer>
    </Wrapper>
  );
}
