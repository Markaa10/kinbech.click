import React from "react";
import styled from "styled-components";

type IStandardInputProps = {
  placeholder: string;
  marginTop?: number;
  icon?: JSX.Element;
};

type IContainerProps = {
  marginTop: number;
};

const Container = styled.div<IContainerProps>`
  display: inline-flex;
  flex-direction: row;
  aling-items: center;
  justify-content: space-between;
  padding: 0 5px;
  border-bottom: 1px solid #000000;
  width: 100%;

  margin-top: ${(p) => p.marginTop}px;
`;

const Input = styled.input`
  border: none;
  outline: none;

  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #848484;
`;

const StandardInput = (props: IStandardInputProps) => {
  const { placeholder, marginTop = 0, icon } = props;

  return (
    <Container marginTop={marginTop}>
      <Input placeholder={placeholder} />
      {icon && icon}
    </Container>
  );
};

export default StandardInput;
