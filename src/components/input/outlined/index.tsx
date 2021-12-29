import { Body1 } from "components/texts";
import React from "react";
import styled from "styled-components";
import Flex from "../../flex";

type IOutlinedInputProps = {
  label: string;
  width?: string;
  icon?: JSX.Element;
  placeholder?: string;
  marginTop?: number;
  marginBottom?: number;
  type?: "text" | "email" | "password";
};

const Label = styled(Body1)`
  color: #373737;
  margin-bottom: 9px;
`;

const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 42px;
  background: #ffffff;

  border: 1px solid #767676;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 25px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 90%;

  font-family: Telex;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #767676;
`;

const OutlinedInput = (props: IOutlinedInputProps) => {
  const {
    label,
    icon,
    placeholder = "Placeholder",
    marginTop = 0,
    type = "text",
    marginBottom = 2.125,
  } = props;

  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Label>{label}</Label>

      <InputContainer>
        <Input type={type} placeholder={placeholder} />

        {icon && icon}
      </InputContainer>
    </Flex>
  );
};

export default OutlinedInput;
