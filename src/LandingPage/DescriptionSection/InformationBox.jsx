import React from "react";
import styled from "styled-components";

const BoxStyled = styled.div`
  border: 1px solid white;
  padding: 60px 187px;
  width: 1110px;
  height: 656px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderStyled = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: white;
`;
const Line = styled.div`
  border: 1px solid white;
  height: 0px;
  width: 160px;
  margin-bottom: 40px;
`;
const DescriptionStyled = styled.p`
  font-weight: normal;
  font-family: Montserrat;
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 150%;
  padding: 0 17%;
  margin: 0 0 50px 0;
  margin-bottom: 50px;
`;

export default function InformationBox() {
  return (
    <BoxStyled>
      <HeaderStyled>Лучший вкус, это вкус долголетнего вина</HeaderStyled>
      <Line />
      <DescriptionStyled>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim
        tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit
        sed fermentum. Felis adipiscing morbi sodales ac. Mauris dictumst risus
        pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra
        suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor
        purus ultrices enim ultrices. Augue fringilla tellus tortor orci
        ultrices sed. Viverra cras sapien, pellentesque viverra malesuada.
        Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel
        pretium euismod diam. Pellentesque amet, lacus, amet, quis risus.
        Pellentesque scelerisque nunc, orci aliquam quis.
      </DescriptionStyled>
      <img src="images/glass.png" alt="glass"></img>
    </BoxStyled>
  );
}
