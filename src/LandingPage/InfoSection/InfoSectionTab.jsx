import React from "react";
import styled from "styled-components";

const InfoSectionTab = styled.table`
  width: 100%;
  padding-bottom: 30px;
`;

const InfoSectionTabColumnOne = styled.td`
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-spacing: 0;
  border-color: #282828;
  padding-right: 24px;
`;

const InfoSectionTabColumnTwo = styled.td`
  border-style: solid;
  border-width: 0 0 1px 0;
  border-spacing: 0;
  border-color: #282828;
  padding: 10px 0 15px 30px;
`;

const InfoSectionTabColumnTwoTitle = styled.div`
  font-family: Playfair Display;
  font-weight: bold;
  line-height: 150%;
  font-size: 18px;
  color: #282828;
`;

const InfoSectionTabColumnTwoDescription = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #282828;
`;

export default function InfoSectionTable() {
  return (
    <InfoSectionTab>
      <tr>
        <InfoSectionTabColumnOne>1980</InfoSectionTabColumnOne>
        <InfoSectionTabColumnTwo>
          <InfoSectionTabColumnTwoTitle>
            Colli Euganei Bianco Ca' Lustra 1980
          </InfoSectionTabColumnTwoTitle>
          <InfoSectionTabColumnTwoDescription>
            Красочная бутылка вина из Марселя
          </InfoSectionTabColumnTwoDescription>
        </InfoSectionTabColumnTwo>
      </tr>
      <tr>
        <InfoSectionTabColumnOne>1980</InfoSectionTabColumnOne>
        <InfoSectionTabColumnTwo>
          <InfoSectionTabColumnTwoTitle>
            Colli Euganei Bianco Ca' Lustra 1980
          </InfoSectionTabColumnTwoTitle>
          <InfoSectionTabColumnTwoDescription>
            Красочная бутылка вина из Марселя
          </InfoSectionTabColumnTwoDescription>
        </InfoSectionTabColumnTwo>
      </tr>
      <tr>
        <InfoSectionTabColumnOne>1980</InfoSectionTabColumnOne>
        <InfoSectionTabColumnTwo>
          <InfoSectionTabColumnTwoTitle>
            Colli Euganei Bianco Ca' Lustra 1980
          </InfoSectionTabColumnTwoTitle>
          <InfoSectionTabColumnTwoDescription>
            Красочная бутылка вина из Марселя
          </InfoSectionTabColumnTwoDescription>
        </InfoSectionTabColumnTwo>
      </tr>
    </InfoSectionTab>
  );
}
