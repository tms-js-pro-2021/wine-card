import React from "react";
import styled from "styled-components";

const InfoSectionTab = styled.table`
  width: 100%;
  padding-bottom: 30px;
`;

export default function InfoSectionTable() {
  return (
    <InfoSectionTab>
      <tr>
        <td
          style={{
            borderStyle: "solid",
            borderWidth: "0 1px 1px 0",
            borderSpacing: "0",
            borderColor: "#282828",
            paddingRight: "24px",
          }}
        >
          1980
        </td>
        <td
          style={{
            borderStyle: "solid",
            borderWidth: "0 0 1px 0",
            borderSpacing: "0",
            borderColor: "#282828",
            padding: "15px 0 15px 30px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "#282828",
            }}
          >
            Colli Euganei Bianco Ca' Lustra 1980
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#282828",
              paddingBottom: "15px",
            }}
          >
            Красочная бутылка вина из Марселя
          </div>
        </td>
      </tr>
      <tr>
        <td
          style={{
            borderStyle: "solid",
            borderWidth: "0 1px 1px 0",
            borderSpacing: "0",
            borderColor: "#282828",
            paddingRight: "24px",
          }}
        >
          1980
        </td>
        <td
          style={{
            borderStyle: "solid",
            borderWidth: "0 0 1px 0",
            borderSpacing: "0",
            borderColor: "#282828",
            padding: "15px 0 15px 30px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "#282828",
            }}
          >
            Colli Euganei Bianco Ca' Lustra 1980
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#282828",
              paddingBottom: "15px",
            }}
          >
            Красочная бутылка вина из Марселя
          </div>
        </td>
      </tr>
      <tr>
        <td
          style={{
            borderStyle: "solid",
            borderWidth: "0 1px 1px 0",
            borderSpacing: "0",
            borderColor: "#282828",
            paddingRight: "24px",
          }}
        >
          1980
        </td>
        <td
          style={{
            borderStyle: "solid",
            borderWidth: "0 0 1px 0",
            borderColor: "#282828",
            padding: "15px 0 15px 30px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "#282828",
            }}
          >
            Colli Euganei Bianco Ca' Lustra 1980
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#282828",
              paddingBottom: "15px",
            }}
          >
            Красочная бутылка вина из Марселя
          </div>
        </td>
      </tr>
    </InfoSectionTab>
  );
}
