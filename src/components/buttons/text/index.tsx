import React from "react";
import styled from "styled-components";

type ITextButtonProps = { text: string; onClick?(): any };

const Text = styled.p`
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  text-align: right;

  color: #3c52f6;
  cursor: pointer;
`;

const TextButton = (props: ITextButtonProps) => {
  const { text, onClick = () => console.log("TextButton") } = props;

  return <Text onClick={onClick}>{text}</Text>;
};

export default TextButton;
