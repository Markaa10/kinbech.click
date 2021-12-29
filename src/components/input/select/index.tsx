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
  width: inherit;
  height: 42px;
  padding: 0 25px;

  background: #fff;
  outline: none;
  border: 1px solid #767676;
  border-radius: 5px;
`;

const SelectInput = (props: ISelectInputProps) => {
  const { label } = props;

  return (
    <Flex direction="column">
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
