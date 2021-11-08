import { Body1 } from "components/texts";
import React from "react";
import styled from "styled-components";
import Flex from "components/flex";

type ISelectInputProps = { label: string };

const Label = styled(Body1)`
  color: #373737;
  margin-bottom: 9px;
`;

const Select = styled.select`
  width: 90%;
  height: 42px;
  padding: 0 25px;

  outline: none;
  border-radius: 5px;
`;

const SelectInput = (props: ISelectInputProps) => {
  const { label } = props;

  return (
    <Flex direction="column" alignItems="flex-start">
      <Label>{label}</Label>
      <Select>
        <option>Nepal</option>
        <option>China</option>
        <option>India</option>
      </Select>
    </Flex>
  );
};

export default SelectInput;
