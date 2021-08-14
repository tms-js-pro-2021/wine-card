import React from "react";
import styled from "styled-components";

const PhotoContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-gap: 30px;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const PhotoSmallContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export default function InfoSectionPhotoBlock() {
  return (
    <PhotoContainer>
      <img
        src="./images/vine.png"
        style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        alt=""
      />
      <PhotoSmallContainer>
        <img
          src="./images/bottle1.png"
          style={{ maxHeight: "228px", width: "100%", objectFit: "cover" }}
          alt=""
        />
        <img
          src="./images/bottle2.png"
          style={{ maxHeight: "228px", width: "100%", objectFit: "cover" }}
          alt=""
        />
      </PhotoSmallContainer>
    </PhotoContainer>
  );
}
