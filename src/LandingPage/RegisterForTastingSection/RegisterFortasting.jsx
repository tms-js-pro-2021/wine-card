
import React from "react";
import styled from "styled-components";
import { Container } from "../../components";

const ContainerStyled = styled(Container)`
  background: #282828;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
`;

const BorderBox = styled.div`
  height: 538px;
  width: 100%;
  max-width: 1110px; 
  border:1px solid white;
  margin: 129px 30px 100px;
  position: relative;
`;

const BorderBoxContent = styled.div`
  padding: 65px 285px 80px;
`;

const BorderBoxLabel = styled.div`
  position: absolute;
  top: -37px;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
  background-color: #282828;
  padding: 10px 50px;
  color: #ffffff;
  left: 50%;
  transform: translateX(-50%);
`
const BorderBoxLeftCorner = styled.div`
  position: absolute;
  top: -69px;
  left: -30px;
  width: 260px;
  height: 260px;
  background: url('images/vonograd.png') no-repeat center;
  
`;
const BorderBoxRightCorner = styled.div`
  position: absolute;
  top: -65px;
  right: -53px;
  width: 260px;
  height: 200px;
  background: url('images/bochka.png') no-repeat center;
`;
const BorderBoxHr = styled.hr`
  width: 118px;
  margin: 0 auto 40px;
`;

const InputRow = styled.div`
  display: flex;
  >* {
    flex:1;
    &:not(:first-child) {
      margin-left: 30px;
    }
  }
`;

const InputEl = styled.input`
    background: none;
    border: none;
    font-weight: 500;
    font-size: 13px;
    line-height: 150%;
    color: #ffffff;
    pointer-events: all;
    width:100%;
    height: 100%;

    ::placeholder {
      color: #ffffff;
    }
  `;

const Input = props => {
  const { type, placeholder, name, ...rest } = props;


  const Container = styled.div`
    border-bottom: 1px solid #ffffff;
    padding-bottom: 10px;
    margin-bottom: 40px;
    position: relative;
  `;


  return (
    <Container { ...rest }>
      <InputEl name={name} type={type} placeholder={placeholder}/>
    </Container>
  )
}

const BorderBoxButton = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;


  color: #FFFFFF;
  padding: 15px;
  border: 1px solid #FFFFFF;
  cursor: pointer;
  margin-top: 10px;
`;


export default function RegisterForTastingSection() {
  return (
    <ContainerStyled>
      <BorderBox>
        <BorderBoxLeftCorner />
        <BorderBoxRightCorner />
        <BorderBoxLabel>
          Запись на дегустацию
        </BorderBoxLabel>
        <BorderBoxContent>
          <BorderBoxHr />
          <p style={{ textAlign: 'center', marginBottom: 80}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. 
          </p>
          <InputRow>
            <Input placeholder="Имя" name="name">
            </Input>
            <Input placeholder="Телефон" name="phone">
            </Input>
          </InputRow>
          <InputRow>
            <Input placeholder="Бутик на Невском 103" name="address">
            </Input>
          </InputRow>
          <BorderBoxButton>записаться</BorderBoxButton>
        </BorderBoxContent>
      </BorderBox>
    </ContainerStyled>
  );
}
