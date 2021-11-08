import React from "react";
import Flex from "../../flex";
import { Body1 } from "../../texts";

type ICheckboxProps = {
  label: string;
  width?: string;
  marginTop?: number;
  marginBottom?: number;
};

const Checkbox = (props: ICheckboxProps) => {
  const { label, width = "100%", marginBottom = 0, marginTop = 0 } = props;

  return (
    <Flex
      width={width}
      justifyContent="flex-start"
      marginBottom={marginBottom}
      marginTop={marginTop}
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
