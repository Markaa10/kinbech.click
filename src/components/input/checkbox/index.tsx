import React from "react";
import Flex from "../../flex";
import { Body1 } from "../../texts";

type ICheckboxProps = { label: string; width?: string };

const Checkbox = (props: ICheckboxProps) => {
  const { label, width = "100%" } = props;

  return (
    <Flex
      width={width}
      justifyContent="flex-start"
      style={{ cursor: "pointer" }}
    >
      <input type="checkbox" />
      <Body1 style={{ marginLeft: 16 }} color="#767676">
        {label}
      </Body1>
    </Flex>
  );
};

export default Checkbox;
