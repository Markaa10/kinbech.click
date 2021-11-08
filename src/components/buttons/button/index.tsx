import React from "react";
import styled from "styled-components";

type IButtonProps = {
  text: string;
  OnClick?(): any;
  width?: string;
  marginTop?: number;
  marginBottom?: number;
};

type IContainerProps = {
  width: string;
  marginTop: number;
  marginBottom?: number;
};

const Container = styled.button<IContainerProps>`
  width: ${(p) => p.width};
  height: 56px;
  background: linear-gradient(180deg, #4cacfc -12.5%, #3946f5 100%);
  border-radius: 5px;
  border: none;
  outline: none;
  margin-top: ${(p) => p.marginTop}px;
  margin-bottom: ${(p) => p.marginBottom}px;

  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.1em;

  color: #ffffff;
`;

const Button = (props: IButtonProps) => {
  const {
    text,
    width = "100%",
    marginTop = 0,
    OnClick = () => console.log("Button"),
  } = props;

  return (
    <Container marginTop={marginTop} width={width} onClick={OnClick}>
      {text}
    </Container>
  );
};

export default Button;
