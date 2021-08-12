import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import ButtonsBlock from "./ButtonsBlock";
import ContactsRow from "./ContactsRow";
import NavigationRow from "./NavigationBar";

const ContainerStyled = styled(Container)`
  background: linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0) 100%),
    url("images/bgc.png"), #ededed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 900px;
`;

export default function BannerSection() {
  return (
    <ContainerStyled>
      <ContactsRow />
      <NavigationRow />
      <ButtonsBlock />
    </ContainerStyled>
  );
}
