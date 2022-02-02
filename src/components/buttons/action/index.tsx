import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.button`
  ${tw`py-2 px-5 bg-primary `};
  border-radius: 10px;
  border: none;
  outline: none;

  font-family: Sen;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
`;

type IActionButtonProps = { text: string };
function ActionButton(props: IActionButtonProps) {
  const { text } = props;

  return <Container>{text}</Container>;
}

export default ActionButton;
