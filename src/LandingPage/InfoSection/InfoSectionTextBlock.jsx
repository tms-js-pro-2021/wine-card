import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../components/PrimaryButton";
import InfoSectionTable from "./InfoSectionTab";

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

const InfoSectionLine = styled.div`
  max-width: 160px;
  width: 100%;
  height: 0px;
  background: #282828;
  border: 1px solid #282828;
  margin-bottom: 30px;
`;

export default function InfoSectionTextBlock() {
  return (
    <TextBlock>
      <div style={{ paddingBottom: "30px" }}>Новинки коллекций
      </div>
      <h1 style={{ paddingBottom: "30px", margin: "0px" }}>
        Март 1980
        <br />
        Урожай Марселя
      </h1>
      <InfoSectionLine />
      <div style={{ paddingBottom: "30px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga
        esse molestias impedit reprehenderit fugit necessitatibus veniam,
        quibusdam sapiente quis inventore provident dicta doloremque, in vitae
        saepe dolor, quas magnam.
      </div>
      <InfoSectionTable />
      <div 
  style={{ paddingBottom: "30px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga
        esse molestias impedit reprehenderit fugit necessitatibus veniam,
        quibusdam sapiente quis inventore provident dicta doloremque, in vitae
        saepe dolor, quas magnam.
      </div>
      <PrimaryButton>узнать подробнее</PrimaryButton>
    </TextBlock>
  );
}
